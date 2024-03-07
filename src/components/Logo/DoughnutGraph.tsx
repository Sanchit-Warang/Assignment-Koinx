import React from 'react'

const DoughnutGraph = () => {
  return (
    <svg
      width="179"
      height="180"
      viewBox="0 0 179 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="89.5"
        cy="89.7969"
        r="74.5"
        stroke="#0082FF"
        stroke-width="30"
      />
      <mask id="path-2-inside-1_1_922" fill="white">
        <path d="M89.5 0.296875C74.3468 0.296875 59.4417 4.14426 46.1817 11.4784C32.9217 18.8126 21.7409 29.3935 13.6873 42.2293C5.63363 55.065 0.970851 69.7355 0.135952 84.8657C-0.698948 99.9958 2.32137 115.09 8.91382 128.734L89.5 89.7969V0.296875Z" />
      </mask>
      <path
        d="M89.5 0.296875C74.3468 0.296875 59.4417 4.14426 46.1817 11.4784C32.9217 18.8126 21.7409 29.3935 13.6873 42.2293C5.63363 55.065 0.970851 69.7355 0.135952 84.8657C-0.698948 99.9958 2.32137 115.09 8.91382 128.734L89.5 89.7969V0.296875Z"
        stroke="#FAA002"
        stroke-width="60"
        mask="url(#path-2-inside-1_1_922)"
      />
      <circle cx="89.5" cy="89.5" r="59.5" fill="white" />
      <circle cx="89.5" cy="89.5" r="59.5" stroke="#0082FF" />
    </svg>
  )
}

export default DoughnutGraph
