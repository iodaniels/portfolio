import { GiBison } from "react-icons/gi"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home">
                <GiBison className="text-7xl" />
            </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/iodaniels/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
            </a>
            <a href="https://github.com/iodaniels" target="_blank" rel="noopener noreferrer" aria-label="Github">
                <FaGithub />
            </a>
        </div>
    </nav>
  )
}

export default Navbar