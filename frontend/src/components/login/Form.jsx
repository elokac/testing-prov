import Link from "next/link";
import { useState } from "react";

export default function Form() {
  // setting values to default
  const [values, setValues] = useState({
    companyEmail: "",
    password: "",
  });
  const [pass, setPass] = useState(true)

  //   setting submit state
  const [submitted, setSubmitted] = useState(false);

  //   handling changes for inputs

  const handleCompanyEmail = (event) => {
    setValues({ ...values, companyEmail: event.target.value });
  };

  const handlePassword = (event) => {
    setValues({ ...values, password: event.target.value });
  };

  // handling submit
  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);
  };

  return (
    <div>
      <div className="mx-[71px]">
        <h1 className="text-providus font-sans font-bold not-italic text-first mt-[91px] mb-[24px]">
          Login
        </h1>
        <p className="font-sans mb-[52px] not-italic font-normal text-login">
          Login to your account using registered credentials
        </p>
        <form className="" onSubmit={handleSubmit}>
          <div>
            {/* company email */}
            <div className="flex relative">
              <input
                onChange={handleCompanyEmail}
                value={values.companyEmail}
                className="bor w-[728px] bg-gen1 pb-3 mb-7"
                placeholder="Enter Email Address"
                name="companyEmail"
                type="email"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 48 48"
                className="text-gray-500 items-center absolute cursor-pointer left-[695px]"
              >
                <mask id="svgIDa">
                  <path
                    fill="#fff"
                    stroke="#fff"
                    strokeLinejoin="round"
                    strokeWidth="4"
                    d="M5.004 42.231a.78.78 0 0 0 .791.769h36.407a.78.78 0 0 0 .792-.769v-.918c.018-.277.055-1.657-.855-3.184c-.574-.963-1.407-1.794-2.476-2.472c-1.293-.82-2.938-1.413-4.928-1.77a29.236 29.236 0 0 1-3.002-.584c-2.632-.672-2.862-1.267-2.864-1.273a.763.763 0 0 0-.066-.169c-.022-.11-.075-.528.027-1.647c.258-2.843 1.783-4.523 3.008-5.873c.386-.425.751-.828 1.032-1.222c1.213-1.7 1.325-3.635 1.33-3.755a2 2 0 0 0-.087-.628c-.12-.37-.343-.6-.507-.77a2.874 2.874 0 0 1-.113-.12c-.012-.014-.044-.052-.015-.243a19.01 19.01 0 0 0 .203-1.857c.056-1.002.099-2.5-.16-3.959a6.031 6.031 0 0 0-.172-.825c-.273-1.004-.711-1.862-1.32-2.57c-.105-.115-2.653-2.8-10.05-3.35c-1.023-.076-2.034-.035-3.03.016a4.39 4.39 0 0 0-.875.108c-.764.197-.968.681-1.021.952c-.089.45.067.798.17 1.03c.015.033.034.074.001.182c-.171.266-.442.506-.717.733c-.08.067-1.934 1.667-2.036 3.756c-.275 1.589-.255 4.064.07 5.775c.02.095.047.235.002.33c-.35.313-.746.668-.745 1.478c.004.082.117 2.016 1.33 3.717c.28.394.645.796 1.03 1.221l.002.001c1.225 1.35 2.75 3.03 3.008 5.872c.101 1.12.048 1.537.027 1.648a.758.758 0 0 0-.067.169c-.001.006-.23.599-2.85 1.27c-1.512.387-3 .585-3.045.59c-1.934.327-3.569.906-4.86 1.721c-1.065.673-1.9 1.507-2.48 2.477c-.928 1.55-.903 2.962-.89 3.22v.923Z"
                  />
                </mask>
                <path
                  fill="currentColor"
                  d="M0 0h48v48H0z"
                  mask="url(#svgIDa)"
                />
              </svg>
              {submitted && !values.companyEmail ? (
                <span className="error-text">Please enter a valid email</span>
              ) : null}
            </div>

            {/*password*/}
            <div className="flex relative">
              <input
                onChange={handlePassword}
                value={values.password}
                className="bor w-[728px] pb-3 bg-gen1"
                placeholder="Password"
                name="password"
                type={pass ? "password" : "text"}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 36 36"
                className="text-gray-500 items-center cursor-pointer absolute left-[695px]"
                onClick={()=>{setPass(prev => !prev)}}
              >
                <rect
                  x="0"
                  y="0"
                  width="36"
                  height="36"
                  fill="none"
                  stroke="none"
                />
                <path
                  fill="currentColor"
                  d="M25.19 20.4a6.78 6.78 0 0 0 .43-2.4a6.86 6.86 0 0 0-6.86-6.86a6.79 6.79 0 0 0-2.37.43L18 13.23a4.78 4.78 0 0 1 .74-.06A4.87 4.87 0 0 1 23.62 18a4.79 4.79 0 0 1-.06.74Z"
                  className="clr-i-outline clr-i-outline-path-1"
                />
                <path
                  fill="currentColor"
                  d="M34.29 17.53c-3.37-6.23-9.28-10-15.82-10a16.82 16.82 0 0 0-5.24.85L14.84 10a14.78 14.78 0 0 1 3.63-.47c5.63 0 10.75 3.14 13.8 8.43a17.75 17.75 0 0 1-4.37 5.1l1.42 1.42a19.93 19.93 0 0 0 5-6l.26-.48Z"
                  className="clr-i-outline clr-i-outline-path-2"
                />
                <path
                  fill="currentColor"
                  d="m4.87 5.78l4.46 4.46a19.52 19.52 0 0 0-6.69 7.29l-.26.47l.26.48c3.37 6.23 9.28 10 15.82 10a16.93 16.93 0 0 0 7.37-1.69l5 5l1.75-1.5l-26-26Zm9.75 9.75l6.65 6.65a4.81 4.81 0 0 1-2.5.72A4.87 4.87 0 0 1 13.9 18a4.81 4.81 0 0 1 .72-2.47Zm-1.45-1.45a6.85 6.85 0 0 0 9.55 9.55l1.6 1.6a14.91 14.91 0 0 1-5.86 1.2c-5.63 0-10.75-3.14-13.8-8.43a17.29 17.29 0 0 1 6.12-6.3Z"
                  className="clr-i-outline clr-i-outline-path-3"
                />
                <path fill="none" d="M0 0h36v36H0z" />
              </svg>
              {submitted && !values.password ? (
                <span className="error-text">
                  Please enter a valid password
                </span>
              ) : null}
            </div>

            <div className="flex justify-end font-sans not-italic font-normal text-login">
              <p className="text-gray-500 text-[14px]">Forgotten password? </p> &nbsp;
              <a className="text-providus cursor-pointer text-[14px]" href="/password">
                Click here
              </a>
            </div>

            {/* Log-in Button */}
            <Link href='/dashboard'>
              <button
                className="bg-bac flex justify-center w-[728px] text-white rounded-[20px] py-[25px] px-[171px] mt-[35px]"
                type="submit"
              >
                Login
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
