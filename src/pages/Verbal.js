import React from 'react'
import SubjectTopic from '../components/SubjectTopic'
import AptitudeCardR from '../components/AptitudeCardR'
import AptitudeCardL from '../components/AptitudeCardL'

export default function Verbal() {
    return (
        <>
            <SubjectTopic

                imagelink="https://files.prepinsta.com/2023/07/important-english-topics-for-placements.webp"
            />

            <div className="container mt-5">
                <div className="container">
                    <h3>Most Important Aptitude Topics - Verbal</h3>
                    <p>Verbal ability is crucial as it tests the candidate’s command over the English language. As most MNCs have a global client-base, candidate, hence they look for candidates with good communication skills.
                        The important topics of Verbal Ability are:-</p>
                </div>
            </div>

            {/* <!--------------------------------Basic Grammar ----------------------------------> */}

            <AptitudeCardR
                title="Basic Grammar"
                subtopic1="Basic Grammar"
                subtopic2="Speech and Voices"
                subtopic3="Tenses"
                subtopic4="Article"
                subtopic5="Idoms and Phrases"
                subtopic6="Prepositions and Conjunction"
                subtopic7="Sentence Completion"

                image="https://files.prepinsta.com/2023/07/important-topics-on-verbal.webp"

            />
            {/* <!--------------------------------Sentences ----------------------------------> */}

            <AptitudeCardL
                title="Sentences"
                subtopic1="Sentence Ordering"
                subtopic2="Contextual Vocabulary"
                subtopic3="Jumbled Sentence"
                subtopic4="Sentence Formation"
                subtopic5="Error Identification"

                image="https://files.prepinsta.com/2023/07/important-topics-for-placements.webp"

            />


            {/* <!--------------------------------Paragraphs ----------------------------------> */}

            <AptitudeCardR
                title="Paragraphs"
                subtopic1="Cloze Test"
                subtopic2="Fill In the Blanks"
                subtopic3="Paragraph Ordering"
                subtopic4="Para Jumbles"

                image="https://files.prepinsta.com/2023/07/important-verbal-topics-1.webp"

            />


            {/* <!--------------------------------Synonyms - Antonyms ----------------------------------> */}

            <AptitudeCardL
                title="Synonyms - Antonyms"
                subtopic1="Synonyms - Antonyms"
                subtopic2="Antonyms"
                subtopic3="Synonyms"

                image="https://files.prepinsta.com/2023/07/english-questions-for-placements.webp"

            />

            {/* <!--------------------------------Reading Comprehension ----------------------------------> */}

            <AptitudeCardR
                title="Reading Comprehensions"
                subtopic1="Reading Comprehensions"

                image="https://files.prepinsta.com/2023/07/important-english-topics-for-placements.webp"


            />

        </>
    )
}
