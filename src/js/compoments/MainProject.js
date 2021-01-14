import React from 'react';
import SlideDisplay from './SlideDisplay';
import { paramsEffect } from './swiperParams';

const MianProject = () => {
  const projects = [
    {
      title: 'Predict Profits and Prices',
      subtitle: '| Linear Regression Algorithm | Numpy | Jupyter |',
      text:
        'First, linear regression with' +
        'one variable to predict profits for a food truck. '+
        'Second, linear regression'+
        ' with multiple variables to predict the prices of houses. wanting to know what a good market price would be.',
      image: require('../../img/lr1.png'),
      githubUrl: 'https://github.com/ping58972/LinearRegression_Practice'
    },
    {
      title: 'Predict: Student Admitted & Microchips Quality',
      subtitle: '| Logistic Regression Algorithm | Numpy | scipy |',
      text:
        " Build a logistic regression model to predict whether a student gets admitted "+
        "into a university. "
        +"Second, Implement regularized logistic regression to predict whether microchips "+
        "from a fabrication plant passes quality assurance (QA). ",
        image: require('../../img/lr2.png'),
      githubUrl:
        'https://github.com/ping58972/LogisticRegression_practice'
    },
    {
      title: 'Identify Cat Picture',
      subtitle: 'Logistic Regression with a Neural Network',
      text:
        "Dataset ('data.h5'): - a training set of m_train images labeled as cat (y=1) or non-cat (y=0) - a test set of m_test images labeled as cat or non-cat - each image is of shape (num_px, num_px, 3) where 3 is for the 3 channels (RGB)."
       , image: require('../../img/cat.png'),
      githubUrl:
        'https://github.com/ping58972/Coursera_DeepLearningSpecialization/tree/main/NeuralNetworksAndDeepLearning/Week2/Logistic%20Regression%20as%20a%20Neural%20Network'
    },
    {
      title: 'Identify Cat Picture By DNN',
      subtitle: 'Identify Cat Picture by Deep Neural Network',
      text:"Build and apply a deep neural network to supervised learning."
         , image: require('../../img/LlayerNN.png'),
      githubUrl:
        'https://github.com/ping58972/Coursera_DeepLearningSpecialization/tree/main/NeuralNetworksAndDeepLearning/Week4/Deep%20Neural%20Network%20Application%20Image%20Classification'
       },
       {
        title: 'Identify Hand Number by CNN',
        subtitle: 'Convolutional Neural Networks',
        text:"Implement helper functions by implementing a TensorFlow model"+

        "Implement a fully functioning ConvNet using TensorFlow"+
        
        "Build and train a ConvNet in TensorFlow for a classification problem"
           , image: require('../../img/2.png'),
        githubUrl:
          'https://github.com/ping58972/Coursera_DeepLearningSpecialization/tree/main/Convolutional%20Neural%20Networks/Week1/Convolutional%20Model%20-%20application'
         },
         {
          title: 'Identify Hand Number by RN',
          subtitle: 'Residual Networks',
          text:"Implement the basic building blocks of ResNets."+
          "Put together these building blocks to implement and train"+ 
          "a state-of-the-art neural network for image classification."
             , image: require('../../img/2_rn.png'),
          githubUrl:
            'https://github.com/ping58972/Coursera_DeepLearningSpecialization/tree/main/Convolutional%20Neural%20Networks/Week2/ResNets'  
          },
          {
            title: 'Autonomous driving - Car detection',
            subtitle: 'YOLO model',
            text:"About object detection using the very powerful YOLO model. "+
            "Many of the ideas in this notebook are described in the two YOLO papers:"+ 
            "Redmon et al., 2016 and Redmon and Farhadi, 2016."+
            "Use object detection on a car detection dataset"+
            "Deal with bounding boxes"
               , image: require('../../img/box_label.png'),
            githubUrl:
              'https://github.com/ping58972/Coursera_DeepLearningSpecialization/tree/main/Convolutional%20Neural%20Networks/Week3/Car%20detection%20with%20YOLO'
            },
    {
      title: 'Planar Data Classification',
      subtitle: 'Classification with one hidden layer',
      text:
        "Implement a 2-class classification neural network with a single hidden layer"+
        "Use units with a non-linear activation function, such as tanh"+
        "Compute the cross entropy loss"+
        "Implement forward and backward propagation"
        , image: require('../../img/Planar.png'),
      githubUrl:
        'https://github.com/ping58972/Coursera_DeepLearningSpecialization/tree/main/NeuralNetworksAndDeepLearning/Week3/Planar%20data%20classification%20with%20one%20hidden%20layer'
      },
      {
        title: 'Face Recognition',
        subtitle: 'Face Verification | Face Recognition',
        text:
          "Implement the triplet loss function"+
          "Use a pretrained model to map face images into 128-dimensional encodings"+
          "Use these encodings to perform face verification and face recognition"
          , image: require('../../img/distance_kiank.png'),
        githubUrl:
          'https://github.com/ping58972/Coursera_DeepLearningSpecialization/tree/main/Convolutional%20Neural%20Networks/Week4/Face%20Recognition'
             },
             {
              title: 'Deep Learning & Art',
              subtitle: 'Neural Style Transfer',
              text:
                "Implement the neural style transfer algorithm"+
                "Generate novel artistic images using your algorithm"
                , image: require('../../img/louvre_generated.png'),
              githubUrl:
                'https://github.com/ping58972/Coursera_DeepLearningSpecialization/tree/main/Convolutional%20Neural%20Networks/Week4/Neural%20Style%20Transfer'
                },
                {
                  title: 'Emojify',
                  subtitle: 'Sequence Models',
                  text:
                    "Congratulations on the promotion! Let's get coffee and talk. Love you!"+

                   " The emojifier can automatically turn this into:"+
                    
                    "Congratulations on the promotion! 👍 Let's get coffee and talk. ☕️ Love you! ❤️"
                    , image: require('../../img/data_set.png'),
                  githubUrl:
                    'https://github.com/ping58972/Coursera_DeepLearningSpecialization/tree/main/Sequence%20Models/Week2/Emojify'
                       },
      {
        title: 'Building Deep Neural Network',
        // subtitle: 'Classification with one hidden layer',
        text:
          "Use non-linear units like ReLU to improve your model"+
          "Build a deeper neural network (with more than 1 hidden layer)"+
          "Implement an easy-to-use neural network class"
          , image: require('../../img/outline.png'),
        githubUrl:
          'https://github.com/ping58972/Coursera_DeepLearningSpecialization/tree/main/NeuralNetworksAndDeepLearning/Week4/Building%20your%20Deep%20Neural%20Network%20-%20Step%20by%20Step'
          },
          {
            title: 'Jazz Solo with LSTM',
            subtitle: 'Improvise a Jazz Solo with an LSTM Network',
            text:
              "Apply an LSTM to music generation."+
              "Generate your own jazz music with deep learning."
              , image: require('../../img/jazz.jpg'),
            githubUrl:
              'https://github.com/ping58972/Coursera_DeepLearningSpecialization/tree/main/Sequence%20Models/Week1/Jazz%20improvisation%20with%20LSTM'    
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
