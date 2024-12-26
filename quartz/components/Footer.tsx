import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"
import LastMovieWatched from "./LastMovieWatched"

interface Options {
  links: Record<string, string>,
}

export default ((opts?: Options, lastMovieWatchedComp?: QuartzComponent) => {
  const LastMovieWatched: QuartzComponent = lastMovieWatchedComp ?? (() => null)
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps,
  ) => {
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <div class="flex-container">
          <div>
            <p>
              {i18n(cfg.locale).components.footer.createdWith}{" 💙 with "}
              <a href="https://obsidian.md/">Obsidian</a>{", "}
              <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a>
              {", and "}
              <a href="https://pages.github.com/">Github Pages</a>.
              <br />
              This website does not use 🍪.
              <br />
              No AI was used to generate any kind of content.
            </p>
            <ul>
              {Object.entries(links).map(([text, link]) => (
                <li>
                  <a href={link}>{text}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <LastMovieWatched />
          </div>
          
        </div>  
      </footer>
    )
  }

  Footer.css = style
  Footer.afterDOMLoaded = LastMovieWatched.afterDOMLoaded
  return Footer
}) satisfies QuartzComponentConstructor
