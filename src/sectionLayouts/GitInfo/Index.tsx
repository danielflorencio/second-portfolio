'use client'
import { useQuery, gql } from '@apollo/client';
import { useEffect, useState } from 'react';
import styles from './styles.module.css'

const GET_CONTRIBUTION_DAYS = gql`
query {
    viewer {
        repositories(isFork: false, privacy: PUBLIC) {
            totalCount
        }
        contributionsCollection {
            contributionCalendar {
                totalContributions
                weeks {
                    contributionDays {
                        contributionCount
                    }
                }
            }
        }
    }
}
`

export default function GitInfo(){

    const { data: contributionData } = useQuery(GET_CONTRIBUTION_DAYS);

    const [commits, setCommits] = useState();
    const [streak, setStreak] = useState<number>();
    const [repos, setRepos] = useState();

    useEffect(() => {
        let streaks: number[] = [0];
        if(contributionData){
            for(let i = 0; i < contributionData.viewer.contributionsCollection.contributionCalendar.weeks.length; i++){
                for(let n = 0; n < contributionData.viewer.contributionsCollection.contributionCalendar.weeks[i].contributionDays.length; n++){
                    if(contributionData.viewer.contributionsCollection.contributionCalendar.weeks[i].contributionDays[n].contributionCount > 0){
                        streaks[streaks.length - 1] = streaks[streaks.length - 1] + 1
                    } else{
                        if(streaks[streaks.length - 1] !== 0){
                            streaks.push(0)
                        }
                    }
                }
            }
            const highestStreak = Math.max(...streaks)
            setStreak(highestStreak)
            setCommits(contributionData.viewer.contributionsCollection.contributionCalendar.totalContributions)
            setRepos(contributionData.viewer.repositories.totalCount)
        }
    }, [contributionData])

    return(
        <section className={styles.section}>
            <h1 className={styles.title}>The best developers are always improving themselves.</h1>
            <h2 className={styles.subtitle}>See my Github stats as my coding skills grow sharper every single day.</h2>
            <div className={styles.infoBlocks}>
                <div className={styles.infoBlock}>
                    <p className={styles.infoBlockNumber}>{commits}</p>
                    <h3 className={styles.infoBlockTitle}>Commits in the last year</h3>
                </div>

                <div className={styles.infoBlock}>
                    <p className={styles.infoBlockNumber}>{streak}</p>
                    <h3 className={styles.infoBlockTitle}>Highest streak</h3>
                </div>

                <div className={styles.infoBlock}>
                    <p className={styles.infoBlockNumber}>{repos}</p>
                    <h3 className={styles.infoBlockTitle}>Repos contributed</h3>
                </div>

            </div>
        </section>
    )
}