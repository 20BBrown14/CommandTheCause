import { BASE_DISCORD_URL } from '@/constants/discord/';
import { DISCORD_BEARER_TOKEN } from '@/constants/environment';
import type { Guild, GuildMember } from '@/types/discord';
import { isNullOrUndefined } from '@/utils/isNullOrUndefined';
import {getHandler} from '@/utils/middleware';
import { fetchWrapper } from '@/utils/middleware/fetchWrapper';
import type { NextApiRequest, NextApiResponse } from 'next';

const getQueryValues = (limit: string | string[], after: string | string[] | undefined) => {
  if(!isNullOrUndefined(limit) && !isNullOrUndefined(after)) {
    return `limit=${limit}&after=${after}`;
  };

  if(!isNullOrUndefined(limit)) {
    return `limit=${limit}`;
  }

  if(!isNullOrUndefined(after)) {
    return `after=${after}`;
  }

  return '';
}

const API_URL = `${BASE_DISCORD_URL}/guilds`;

const getGuild = async (guildID: string | string[]) => {
  try {
    const guild = await fetchWrapper<Guild, undefined>({
      method: 'GET',
      url: `${API_URL}/${guildID}?with_counts=true`,
      headers: {
        Authorization: `Bot ${DISCORD_BEARER_TOKEN}`
      }
    });

    return guild;
  } catch (error) {
    throw new Error('Failed to fetch guild member list.');
  }
}

const getGuildMemberList = async (guildID: string | string[], limit: string | string[] = '1000', after: string | string[] | undefined) => {
  const queryValues = getQueryValues(limit, after)
  try {
    const guildMemberList = await fetchWrapper<GuildMember[], undefined>({
      method: 'GET',
      url: `${API_URL}/${guildID}/members${queryValues ? `?${queryValues}` : ''}`,
      headers: {
        Authorization: `Bot ${DISCORD_BEARER_TOKEN}`
      }
    });

    return guildMemberList;
  } catch (error) {
    throw new Error(`Failed to fetch guild member list. ${error instanceof Error ? error.message : ''}`);
  }
}

const getRequestHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    id: guildID,
    limit,
    after
  } = req.query;
  const guildMemberList: GuildMember[] = [];

  if(limit || after) {
    guildMemberList.push(...await getGuildMemberList(guildID, limit, after))
  } else {
    while(true) {
      const afterID = guildMemberList.length === 0 ? after : guildMemberList[guildMemberList.length - 1].user?.id;

      if(guildMemberList.length !== 0 && !afterID) {
        break;
      }

      const members = await getGuildMemberList(guildID, limit, afterID)

      if(!members.length) {
        break;
      }

      guildMemberList.push(...members);
    }
  }

  res.status(200).json(guildMemberList);
}

export default getHandler().get(getRequestHandler);