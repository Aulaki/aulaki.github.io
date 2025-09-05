export default function Footer() {
  return (
    <footer className="bg-light-bg dark:bg-dark-bg border-t border-light-border dark:border-dark-border py-4">
      <p className="text-center text-sm text-light-text/70 dark:text-dark-text/70">
        © {new Date().getFullYear()} Samuel Dev. Todos los derechos reservados.
      </p>
    </footer>
  )
}