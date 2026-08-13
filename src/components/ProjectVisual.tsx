import type { Project } from '../content'
import { useLanguage } from '../context/language-context'

export function ProjectVisual({ project }: { project: Project }) {
  const { t } = useLanguage()

  return (
    <div className={`project-visual project-visual--${project.id}`} role="img" aria-label={`${t.accessibility.projectPreview}: ${project.title}`}>
      {project.id === 'rawg' && (
        <div className="mock-browser">
          <div className="mock-browser-bar"><span /><span /><span /><b>RAWG / DISCOVER</b></div>
          <div className="game-grid"><i /><i /><i /><i /><i /><i /></div>
        </div>
      )}
      {project.id === 'turnero' && (
        <div className="mock-terminal" aria-hidden="true">
          <p><span>$</span> turno --crear</p>
          <p>médico: <b>DRA_024</b></p>
          <p>fecha: <b>18/08 · 09:30</b></p>
          <p className="terminal-ok">✓ horario disponible</p>
        </div>
      )}
      {project.id === 'cine' && (
        <div className="mock-api" aria-hidden="true">
          <span className="api-route"><b>GET</b> /cine-java/api/movies</span>
          <div className="api-flow"><i>web</i><em>→</em><i>service</i><em>→</em><i>data</i></div>
          <pre>{'{ "status": 200, "items": 12 }'}</pre>
        </div>
      )}
      <span className="project-number" aria-hidden="true">/{project.id === 'rawg' ? '01' : project.id === 'turnero' ? '02' : '03'}</span>
    </div>
  )
}
