import useMediaQuery from "@/hooks/useMediaQuery"
import ActionButton from "@/shared/ActionButton"
import { SelectedPage } from "@/shared/types"
import HomePageText from "@/assets/HomeFroget.png"
import HomePageGraphic from "@/assets/HomeFrog.png"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { motion } from "framer-motion"


type Props = {
    setSelectedPage: (value: string) => void;
}

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")


    return (
        <section
            id="home"
            className="gap-16 bg-gray-20 py-10 md:h-5/6 md:pb-0 pt-20"
        >
            {/* IMAGE AND MAIN HEADER */}
            <motion.div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
                onViewportEnter={() => setSelectedPage(SelectedPage.home)}
            >
                {/* MAIN HEADER  */}
                <div className="z-10 mt-32 md:basis-3/5">
                    {/* HEADINGS  */}
                    <motion.div
                        className="md:-mt-20"
                        initial="hidden"
                        whileInView="visible"
                        // triggers once when 50% is in view 
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        {/* parent should be relative, child should be absolute, to create an image relative to another */}
                        <div className="relative">
                            <div className="">
                                <img src={HomePageText} alt="home-page-text" />
                            </div>
                        </div>

                        <p className="mt-8 text-xl lg:text-6xl font-light leading-tight tracking-tight text-gray-500">
                            Look back on your habits and moods. Record your day with just a few taps. Discover the patterns that make you happy and find those that weigh you down. Let's get started!
                        </p>
                    </motion.div>
                    {/* ACTION */}
                    <motion.div className="mt-8 flex items-center gap-8 md:justify-start mb-10"
                        initial="hidden"
                        whileInView="visible"
                        // triggers once when 50% is in view 
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Start now
                        </ActionButton>
                        <AnchorLink
                            className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                            onClick={() => setSelectedPage(SelectedPage.about)}
                            href={`#${SelectedPage.about}`}
                        >
                            <p>Learn More</p>
                        </AnchorLink>
                    </motion.div>
                </div>

                {/* IMAGE  */}
                <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
                    <img
                        src={HomePageGraphic} alt="home-pageGraphic" />
                </div>
            </motion.div>
        </section>
    )
}

export default Home