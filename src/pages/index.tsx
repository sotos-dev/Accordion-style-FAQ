import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import React, { useState } from "react"
import WomanShopping from "../assets/images/woman-shopping.svg"
import WomanShoppingDesktop from "../assets/images/woman-shopping-desktop.svg"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"

const Home: NextPage = () => {
  const [faqs, setFaqs] = useState<
    {
      question: string
      answer: string
      id: string
      active: boolean
    }[]
  >([
    {
      question: "How many team members can I invite?",
      answer: "You cannot invite any team members, figure it out yourself, how does that sound? 😀",
      id: "1",
      active: false
    },

    {
      question: "What is the maximum file upload size?",
      answer:
        "No less than 100TB. Please come back when you have enough data for us to exploit. 🤑",
      id: "2",
      active: false
    },

    {
      question: "How do I reset my password?",
      answer:
        "You cannot reset your password, you should have noted it somewhere when you had the chance, too bad! 🤣",
      id: "3",
      active: false
    },

    {
      question: "Can I cancel my subscription?",
      answer: "Nope, you are bound from our terms and conditions for life 🤡",
      id: "4",
      active: false
    },

    {
      question: "Do you provide additional support?",
      answer: "Of course we do not! 😘",
      id: "5",
      active: false
    }
  ])

  const handleDropdown = (faqId: string) => {
    const updatedFaqs = faqs.map((faq) =>
      faq.id === faqId ? { ...faq, active: !faq.active } : { ...faq, active: false }
    )

    setFaqs(updatedFaqs)
  }

  return (
    <>
      <Head>
        <title>Accordion FAQ</title>
        <meta name="description" content="An accordion style FAQ" />
        <link rel="icon" href="/faq-favicon.png" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-[#AF68EA] to-[#6563E8] flex items-center">
        <div className="container mx-auto px-4 lg:px-20 max-w-6xl">
          {/* FAQ */}
          <div className="bg-white flex flex-col items-center rounded-3xl mt-36 mb-10 lg:flex-row lg:justify-between">
            {/* Image */}
            <div className="-mt-28 lg:hidden">
              <Image src={WomanShopping} alt="illustration of woman shopping online" />
            </div>
            <div className="hidden lg:block lg:-mt-0 lg:-ml-10">
              <Image src={WomanShoppingDesktop} alt="illustration of woman shopping online" />
            </div>
            {/* Content */}
            <div className="flex flex-col items-center w-full p-7 lg:w-1/2">
              <h1 className="text-3xl font-medium mb-5">FAQ</h1>
              <div className="flex flex-col w-full">
                {faqs.map((faq) => {
                  return (
                    <div
                      key={faq.id}
                      className=" border-b-2 pb-3 cursor-pointer group "
                      onClick={() => handleDropdown(faq.id)}>
                      <div className="flex justify-between items-center py-3">
                        <p
                          className={`${
                            faq.active ? "text-orange-600 font-medium" : "font-light"
                          } text-sm group-hover:text-orange-600 transition-all duration-200 lg:text-base`}>
                          {faq.question}
                        </p>
                        <MdOutlineKeyboardArrowDown
                          size={25}
                          className={`${
                            faq.active ? "text-orange-600 rotate-180" : ""
                          } group-hover:text-orange-600 transition-all duration-200`}
                        />
                      </div>
                      <p
                        className={`${
                          faq.active === true ? "h-14" : "h-0"
                        } text-sm text-light overflow-hidden transition-all duration-300 lg:text-base`}>
                        {faq.answer}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
