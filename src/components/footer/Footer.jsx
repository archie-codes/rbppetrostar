const Footer = () => {
  return (
    <footer className="bg-slate-50">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-teal-600">
            <img src="/navbar_logo2.png" alt="logo" className="h-8" />
          </div>

          <ul className="mt-8 flex justify-start gap-6 sm:mt-0 sm:justify-end">
            <li>
              <a
                href="https://www.facebook.com/rbp.petrostar.ph/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75"
              >

                <span className="sr-only">Facebook</span>

                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="/ContactUs"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75"
              >
                <span className="sr-only">Gmail</span>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>

              </a>
            </li>

            <li>
              <a
                href="https://x.com/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75"
              >
                <span className="sr-only">Twitter</span>

                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <div
          className="grid grid-cols-1 gap-8 border-t border-gray-200 pt-8 sm:grid-cols-2 lg:grid-cols-3 lg:pt-16"
        >
          <div>
            <p className="font-medium text-gray-900">Offers</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a href="/Fuels" className="text-gray-700 transition hover:opacity-75"> Fuels </a>
              </li>

              <li>
                <a href="/ValueCardRegistration" className="text-gray-700 transition hover:opacity-75"> Value Card </a>
              </li>

              <li>
                <a href="/InquireforSpace" className="text-gray-700 transition hover:opacity-75"> Spaces </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-gray-900">Company</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a href="/AboutUs" className="text-gray-700 transition hover:opacity-75"> About Us </a>
              </li>

              <li>
                <a href="/AllNews" className="text-gray-700 transition hover:opacity-75"> News and Updates </a>
              </li>

              <li>
                <a href="/CareerList" className="text-gray-700 transition hover:opacity-75"> Careers </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-medium text-gray-900">Helpful Links</p>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a href="/ContactUs" className="text-gray-700 transition hover:opacity-75"> Contact </a>
              </li>

              <li>
                <a href="/Brochure" className="text-gray-700 transition hover:opacity-75"> Brochure </a>
              </li>

              <li>
                <a href="/ValueCardRegistration" className="text-gray-700 transition hover:opacity-75"> Value Card </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-sm text-gray-500">&copy; 2025. RBP Petrostar Inc. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer