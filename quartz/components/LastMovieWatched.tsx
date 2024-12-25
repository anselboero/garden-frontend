import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
// @ts-ignore
import script from "./scripts/lastmoviewatched.inline"

export default (() => {
  const LastMovieWatched: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    return <button id="btn">Click me</button>
  }

  return LastMovieWatched
}) satisfies QuartzComponentConstructor