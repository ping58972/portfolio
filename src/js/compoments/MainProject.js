import React from 'react';
import SlideDisplay from './SlideDisplay';
import { paramsEffect } from './swiperParams';

const MianProject = () => {
  const projects = [
    {
      title: 'Predict Profits and Prices',
      subtitle: '| Linear Regression Algorithm | Numpy | Jupyter |',
      text:
        'First, Implement linear regression with' 
        +'one variable to predict profits for a food truck. Considering different '+
        'cities for opening a new outlet. The chain already has trucks in various '+
        'cities and have data for profits and populations from the cities. '
        +'Using this data to help you select which city to expand to next.'
        +'Second Implement linear regression'+
        ' with multiple variables to predict the prices of houses. Suppose you are '+
        'selling your house and wanting to know what a good market price would be.'+
        ' One way to do this is to first collect information on recent houses sold'+
        ' and make a model of housing prices.',
      // image: require('../../img/shop1.jpg'),
      githubUrl: 'https://github.com/ping58972/LinearRegression_Practice'
    },
    {
      title: 'Predict: Student Admitted & Microchips Quality',
      subtitle: '| Logistic Regression Algorithm | Numpy | scipy |',
      text:
        " Build a logistic regression model to predict whether a student gets admitted "+
        "into a university. Determine each applicant's chance of admission based on their"+
        " results on two exams. "+
        "Build a classification model that estimates an applicant's probability of "+
        "admission based the scores from those two exams."
        +"Second, Implement regularized logistic regression to predict whether microchips "+
        "from a fabrication plant passes quality assurance (QA). "+
        "From these two tests,"+
        " to determine whether the microchips should be accepted or rejected. To help making the decision."
        // image: require('../../img/messageNode.png'),
     , githubUrl:
        'https://github.com/ping58972/LogisticRegression_practice'
    },
    {
      title: 'Machine Learning Certificate',
      subtitle: 'Certificate Course on Coursera',
      // text: 'Coming Soon',
      image: require('../../img/ML.png')
      , githubUrl:
      'https://github.com/ping58972/Coursera-MachineLearning',
      projectUrl:
      'https://coursera.org/share/8d82e24a1f8f3a356c442dca90f5965a'
    },
    {
      title: 'Deep Learning Specialization Certificate',
      subtitle: 'Certificate Course on Coursera',
      text: "Including: Neural Networks and Deep Learning;"+
      " Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization;"+
      " Structuring Machine Learning Projects; "+
      "Convolutional Neural Networks; Sequence Models.",
      image: require('../../img/DL.png')
      , githubUrl:
      'https://github.com/ping58972/Coursera_DeepLearningSpecialization',
      projectUrl:
      'https://coursera.org/share/ba1e48fe968867f905ecb3adafe9c5eb'
    }
  ];
  return (
    <SlideDisplay
      params={paramsEffect}
      projectArray={projects}
      bgColor='#3e3947'
    />
  );
};

export default MianProject;
