import React, {Component} from 'react';

export default class AlgoCuts extends Component {
    render() {
        
        return (
            <div className="">

                <div className="code w-90 bg-white-60 b--dashed b--orange mt3 pa2 ph3 center near-black">
                    <h1 className="tc">ALGOCUTS</h1>
                
                    <p>Algocuts is a series of video compositions, consisting of many video cuts chosen from Google's <a href="https://research.google.com/audioset/index.html">AudioSet</a> and sequenced by algorithmic musical patterns using Python libraries.</p>
                    <p>I downloaded 10 second chunks from all the videos in <a className="link blue hover-light-blue" href="http://storage.googleapis.com/us_audioset/youtube_corpus/v1/csv/balanced_train_segments.csv">Balanced Train Segments</a>, using a modified version of <a className="link blue hover-light-blue" href="https://github.com/marl/audiosetdl">audiosetdl</a>, and categorized them depending of their sound class on <a href="http://storage.googleapis.com/us_audioset/youtube_corpus/v1/csv/class_labels_indices.csv">class_labels_indices.csv</a></p>
                    <p>Then for composing algorithmic patterns, I used <a className="link blue hover-light-blue" href="https://github.com/ideoforms/isobar">isobar library for Python</a> to generate scores for sequences, and map these scores to <a className="link blue hover-light-blue" href="https://zulko.github.io/moviepy/">MoviePy</a> to generate video cuts.</p>
                    <div className="flex flex-wrap justify-center">
                        <iframe className="" width="560" height="315" src="https://www.youtube.com/embed/zfQRkUUvOP8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                
            </div>
        )

    }
}