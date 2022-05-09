import { useGuildMemberList } from "@/hooks/discord";
import { DISCORD_GUILD_ID } from "@/constants/environment";

function HomePage() {
  console.log('DISCORD_GUILD_ID', DISCORD_GUILD_ID)
  const {
    data: discordGuildMemberList,
    isLoading: isLoadingDiscordGuildMemberList,
  } = useGuildMemberList(DISCORD_GUILD_ID);

  console.log('discordGuildMemberList', discordGuildMemberList)
  return(
    <>
      Hello World!
    </>
  )
}

export default HomePage;