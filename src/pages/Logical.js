import React from 'react'
import SubjectTopic from '../components/SubjectTopic'

import AptitudeCardL from '../components/AptitudeCardL'
import AptitudeCardR from '../components/AptitudeCardR'
export default function Logical() {
    return (
        <>
            <SubjectTopic

                imagelink="https://files.prepinsta.com/2022/01/document-1.webp"
            />


            <div className="container mt-5">
                <div className="container">
                    <h3>Most Important Aptitude Topics - Logical</h3>
                    <p>Logical Reasoning, is another very important subject for Aptitude preparation. The candidate’s ability to think critically and analyze information to draw rational conclusions, is tested in this round.
                        The most important topics asked in Logical Reasoning include:- </p>
                </div>
            </div>



            {/* <!--------------------------------Series ----------------------------------> */}


            <AptitudeCardR
                title="Series"
                subtopic1="Number Series"
                subtopic2="Coding and Number Series"
                subtopic3="Letter and Symbol Series"
                subtopic4="Logical Sequence of Words"
                subtopic5="Analogy and Classification Pattern"

                image="https://files.prepinsta.com/2023/07/important-logical-topics-1.webp"


            />

            {/* <!--------------------------------Statements----------------------------------> */}

            <AptitudeCardL
                title="Statements"
                subtopic1="Statements and Conclusions"
                subtopic2="Statements and Assumptions"
                subtopic3="Data Sufficiency"

                image="https://files.prepinsta.com/2023/07/verbal-reasoning-topics.webp"

            />


            {/* <!--------------------------------Visual Reasoning ----------------------------------> */}

            <AptitudeCardR
                title="Visual Reasoning"
                subtopic1="Visual Reasoning"
                subtopic2="Cube and Cuboid"
                subtopic3="Cube"
                subtopic4="Cuboid"

                image="https://files.prepinsta.com/2023/07/important-logical-reasoning-topics.webp"

            />


            {/* <!--------------------------------Classic Reasoning ----------------------------------> */}

            <AptitudeCardL
                title="Classic Reasoning"
                subtopic1="Directional Senses"
                subtopic2="Blood Relations"
                subtopic3="Syllogism"

                image="https://files.prepinsta.com/2023/07/how-to-prepare-aptitude.webp"

            />

            {/* <!--------------------------------Arrangements ----------------------------------> */}

            <AptitudeCardR
                title="Arrangements"
                subtopic1="Arrangements"
                subtopic2="Seating Arrangements"

                image="https://files.prepinsta.com/2023/07/english-topics-for-placements.webp"

            />

            {/* <!--------------------------------Mics ----------------------------------> */}

            <AptitudeCardL
                            title="Mics"
                            subtopic1="Coding Deductive Logic"
                            subtopic2="Selection Decision Tables"

                            subtopic3="Attention to Details"
                            image="https://files.prepinsta.com/2023/07/start-placement-preparations.webp"
            
            />

        </>
    )
}
