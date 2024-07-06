import React from 'react'
import SubjectTopic from '../components/SubjectTopic'
import AptitudeCardR from '../components/AptitudeCardR'
import AptitudeCardL from '../components/AptitudeCardL'

export default function Quants() {
    return (
        <>
            <SubjectTopic

                imagelink="https://files.prepinsta.com/2023/02/probability-questions-and-answers.webp"

            />


            <div className="container mt-5">
                <div className="container">
                    <h3>Most Important Aptitude Topics - Quants</h3>
                    <p>Quantitative Aptitude deals with mathematical ability of a candidate. This is often the toughest section
                        of aptitude, and students face difficulty solving these questions. The most important topics in
                        quantitative aptitude include the following:-
                    </p>
                </div>

            </div>

            {/* <!--------------------------------Numbers ----------------------------------> */}



            <AptitudeCardR
                title="Numbers"
                subtopic1="HCF and LCM"
                subtopic2="Number System"
                subtopic3="Number Decimals & Fractions"
                subtopic4="Divisibility"
                subtopic5="Ages"
                subtopic6="HCF"
                subtopic7="LCM"

                image="https://files.prepinsta.com/2023/07/important-aptitude-questions.webp"
            />





            {/* <!--------------------------------Speed and Work ----------------------------------> */}

            <AptitudeCardL
                title="Speed and Work"
                subtopic1="Speed Time and Distance"
                subtopic2="Work and Time"
                subtopic3="Boats and Streams"
                subtopic4="Pipes and Cisterns"


                image="https://files.prepinsta.com/2023/07/aptitude-for-campus-exam.webp"


            />


            {/* <!--------------------------------Classic Banking ----------------------------------> */}

            <AptitudeCardR

                title="Classic Banking"
                subtopic1="Averages"
                subtopic2="Allegations and Mixtures"
                subtopic3="Ratio and Proportions"
                subtopic4="Simple Interest"
                subtopic5="Compound Interest"
                subtopic6="Percentages"
                subtopic7="Profit & Loss"

                image="https://files.prepinsta.com/2023/07/getting-started-with-aptitude.webp"


            />

            {/* <!--------------------------------Progressions ----------------------------------> */}

            <AptitudeCardL

                title="Progressions"
                subtopic1="AP GP HP "
                subtopic2="Arithmetic Progressions"
                subtopic3="Geometric Progressions"

                image="https://files.prepinsta.com/2023/07/important-aptitude-topics-1.webp"




            />




            {/* <!--------------------------------Probability and Combinations ----------------------------------> */}

            <AptitudeCardR
                title="Probability and Combinations"
                subtopic1="Probability"
                subtopic2="Permutation & Combination "
                subtopic3="Combination"
                subtopic4="Permutation"
                subtopic5="Circular Permutation"
                image="https://files.prepinsta.com/2023/07/aptitude-preparation-for-campus-placements.webp"




            />



            {/* <!--------------------------------Mics ----------------------------------> */}

            <AptitudeCardR
                title="Mics"
                subtopic1="Logarithams"
                subtopic2="Clocks"
                subtopic3="Calenders"
                image="https://files.prepinsta.com/2023/07/aptitude-for-placement-prep.webp"


            />

        </>
    )
}
