import Link from 'next/link';
import React from 'react'
import Container from '../../../layout/Container'

function Footer() {
  return (
    <div>
      <div className="bg-teal">
        <Container>
          <div className=" grid space-y-12 md:space-y-0 md:flex justify-between pt-20 pb-12">
            <div className="space-y-2">
              <h2 className="mb-12 text-3xl font-semibold text-white">
                Headquarters
              </h2>
              <p className="text-gray-300">
                No 1 Esther Obiakor Estate Agu-Awka, Awka
              </p>
              <p className="text-gray-300">info@airs.an.gov.ng</p>
              <p className="text-gray-300">https://www.airs.an.gov.ng</p>
            </div>

            <div className="space-y-2">
              <h2 className="mb-12 text-3xl font-semibold text-white">
                Contact
              </h2>
              <p className="text-gray-300">09053234816</p>
              <p className="text-gray-300">09053234816</p>
            </div>
          </div>

          <div className='py-8 border-t border-[#2B9CBE]'>
            <ul className="flex items-center space-x-4 transition-all">
              <li>
                <Link href="/">
                  <a className="text-sm text-gray-300 hover:text-gray-300">
                    Terms & condition
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="text-sm text-gray-300 hover:text-gray-300">Privacy</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="text-sm text-gray-300 hover:text-gray-300">Back to Top</a>
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </div>
      <div className="bg-primaryDark py-4">
        <Container>
          <div className="grid space-y-2 md:space-y-0 md:flex items-center justify-between text-[#A1A1A1]">
            <small>Copyright © 2018 by Anambra Internal Revenue Service</small>
            <ul className="flex items-center space-x-4 transition-all">
              <li>
                <Link href="/">
                  <a className="text-sm hover:text-gray-300">
                    Terms & condition
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="text-sm hover:text-gray-300">Privacy</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="text-sm hover:text-gray-300">Back to Top</a>
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Footer