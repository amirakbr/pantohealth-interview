const ErrorIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="none"
        viewBox="0 -0.5 25 25"
      >
        <path
          stroke="#ff0000ff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M5.5 12a7 7 0 1 1 14 .001 7 7 0 0 1-14 0"
          clipRule="evenodd"
        ></path>
        <path
          fill="#ff0000ff"
          d="M9.345 14.094a.75.75 0 0 0 1.06 1.06zm3.685-1.563a.75.75 0 1 0-1.06-1.061zm-1.06-1.061a.75.75 0 0 0 1.06 1.06zm3.685-1.566a.75.75 0 0 0-1.061-1.06zM13.03 11.47a.75.75 0 0 0-1.06 1.06zm1.565 3.685a.75.75 0 0 0 1.06-1.061zM11.97 12.53a.75.75 0 0 0 1.06-1.06zm-1.565-3.686a.75.75 0 1 0-1.06 1.06zm0 6.31 2.625-2.623-1.06-1.061-2.625 2.624zm2.626-2.624 2.624-2.626-1.061-1.06-2.624 2.626zm-1.061 0 2.625 2.625 1.06-1.061-2.625-2.624zm1.06-1.06-2.625-2.626-1.06 1.06 2.625 2.626z"
        ></path>
      </svg>
    );
}

export default ErrorIcon