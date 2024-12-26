import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
// @ts-ignore
import script from "./scripts/lastmoviewatched.inline"

export default (() => {
  const LastMovieWatched: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    return (
    <div id="lastmoviewatched">
    </div>
    )
  }

  LastMovieWatched.afterDOMLoaded = script

  return LastMovieWatched
}) satisfies QuartzComponentConstructor