function getContactIcon(label) {
  const value = label.toLowerCase()

  if (value.includes('email')) {
    return (
      <svg viewBox="0 0 24 24" focusable="false">
        <path
          d="M4 7.5C4 6.67 4.67 6 5.5 6H18.5C19.33 6 20 6.67 20 7.5V16.5C20 17.33 19.33 18 18.5 18H5.5C4.67 18 4 17.33 4 16.5V7.5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M5 8L12 13L19 8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  if (value.includes('whatsapp')) {
    return (
      <svg viewBox="0 0 24 24" focusable="false">
        <path
          d="M12 21C16.4183 21 20 17.4183 20 13C20 8.58172 16.4183 5 12 5C7.58172 5 4 8.58172 4 13C4 14.4181 4.36907 15.7501 5.01624 16.9054L4 20L7.20333 19.0167C8.31459 19.6481 9.60008 20 11 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.4 10.2C9.4 9.8 9.7 9.5 10.1 9.5H10.6C10.9 9.5 11.2 9.7 11.3 10L11.8 11.4C11.9 11.7 11.8 12 11.6 12.2L11.1 12.7C11.6 13.7 12.4 14.5 13.4 15L13.9 14.5C14.1 14.3 14.4 14.2 14.7 14.3L16.1 14.8C16.4 14.9 16.6 15.2 16.6 15.5V16C16.6 16.4 16.3 16.7 15.9 16.7H15.4C11.98 16.7 9.2 13.92 9.2 10.5V10.2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  if (value.includes('telefone')) {
    return (
      <svg viewBox="0 0 24 24" focusable="false">
        <path
          d="M7.8 4H5.6C4.72 4 4 4.72 4 5.6C4 13.55 10.45 20 18.4 20C19.28 20 20 19.28 20 18.4V16.2L15.74 14.78L13.6 16.92C10.92 15.56 8.44 13.08 7.08 10.4L9.22 8.26L7.8 4Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  if (value.includes('github')) {
    return (
      <svg viewBox="0 0 24 24" focusable="false">
        <path
          d="M9 19C4 20.5 4 16.5 2 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 22V18.13C15.04 17.62 14.97 17.11 14.79 16.63C14.61 16.15 14.32 15.72 13.94 15.37C17.14 15 20.5 13.8 20.5 8.28C20.5 6.87 20 5.51 19.1 4.43C19.55 3.23 19.52 1.91 19 0.73C19 0.73 17.82 0.36 15 2.27C12.71 1.64 10.29 1.64 8 2.27C5.18 0.36 4 0.73 4 0.73C3.48 1.91 3.45 3.23 3.9 4.43C3 5.52 2.5 6.88 2.5 8.28C2.5 13.79 5.86 15 9.06 15.37C8.68 15.72 8.39 16.15 8.21 16.63C8.03 17.11 7.96 17.62 8 18.13V22"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  if (value.includes('portfolio')) {
    return (
      <svg viewBox="0 0 24 24" focusable="false">
        <path
          d="M12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M3.6 9H20.4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M3.6 15H20.4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M12 3C14.2 5.4 15.45 8.6 15.5 12C15.45 15.4 14.2 18.6 12 21"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M12 3C9.8 5.4 8.55 8.6 8.5 12C8.55 15.4 9.8 18.6 12 21"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" focusable="false">
      <path
        d="M8.5 9.5V15.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M8.5 6.5C8.5 6.22 8.72 6 9 6C9.28 6 9.5 6.22 9.5 6.5C9.5 6.78 9.28 7 9 7C8.72 7 8.5 6.78 8.5 6.5Z"
        fill="currentColor"
      />
      <path
        d="M13 10C14.93 10 16.5 11.57 16.5 13.5V15.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="4"
        y="3.5"
        width="16"
        height="17"
        rx="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  )
}

export function ContactCard({ contact }) {
  return (
    <a className="contact-link" href={contact.href} target="_blank" rel="noreferrer">
      <span className="contact-link-icon" aria-hidden="true">
        {getContactIcon(contact.label)}
      </span>
      <span className="contact-link-label">{contact.label}</span>
    </a>
  )
}
