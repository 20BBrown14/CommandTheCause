import {useQuery, UseQueryOptions, UseQueryResult} from 'react-query';
import type { DiscordSnowflake, GuildMember } from '@/types/discord';
import { fetchWrapper } from '@/utils/middleware/fetchWrapper';
import { isNullOrUndefined } from '@/utils/isNullOrUndefined';

const getQueryValues = (limit: number | undefined, after: DiscordSnowflake | undefined) => {
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

export function useGuildMemberList(guildID: DiscordSnowflake | undefined, limit?: number, after?: DiscordSnowflake, options?: UseQueryOptions<GuildMember[]>): UseQueryResult<GuildMember[]> {
  const queryValue = getQueryValues(limit, after);
  return useQuery<GuildMember[]>(
    ['Guild Member List', guildID, limit, after],
    () => fetchWrapper<GuildMember[], undefined>({
      method: 'GET',
      url: `api/discord/guilds/${guildID}/members${queryValue ? `?${queryValue}` : ''}`
    }),
    {
      onError: (error) => {
        if(error instanceof Error) {
          console.error(`Failed to fetch Discord member list: ${error.message}`)
        }
      },
      retry: 3,
      enabled: !isNullOrUndefined(guildID),
      ...options,
    }
  )
}
