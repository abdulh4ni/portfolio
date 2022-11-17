const YEAR = new Date().getFullYear()

export default {
    head: ({ meta }) => {
    return (
      <>
        <meta name="author" content="Abdul Hani" />
        <link rel="canonical" href="https://abdulhani.com" />
        <meta name="title" content={meta.title} />
        <meta property="description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content="https://abdulhani.com" />
        <meta
          property="og:image"
          content={meta.image || "https://avatars.githubusercontent.com/u/69438318?v=4"}
        />

      </>
    )
  },
  footer: (
    <div>
      <hr />

      <a href="https://github.com/abdulh4ni" target="_blank">
        GitHub
      </a>{" "}

      ·{" "}
      <a href="mailto:abdulh4ni@icloud.com" target="_blank">
        abdulh4ni@icloud.com
      </a>

    </div>
  ),
}
