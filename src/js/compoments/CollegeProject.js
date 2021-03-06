import React from 'react';
import SlideDisplay from './SlideDisplay';

const CollegeProject = () => {
  const projects = [
    {
      title: 'Restuarant Database Management',
      subtitle: '| Java Swing | MySQL | JDBC |',
      text: "Computer Science major class: ICS 311 — Database Implementation on MySQL by Java and JDBC",
          image: require('../../img/mysql.png'),
      githubUrl: 'https://github.com/ping58972/ICS311_restuarantAPP'
    },
    {
      title: 'Veteran Benifits Survey',
      subtitle: '| Java-pdf | Java-email | Java-Maven |',
      text:
        'This project is to implement subvey of veteran benifits, step by step questions then answer Yes/No by using binary tree and Linked Stack, Tesing by Jave Unit 5, and implements by Maven framework like pdf and email, etc.',
      image: require('../../img/vateran-main.jpg'),
      githubUrl: 'https://github.com/ping58972/Veteran-Benifits-Subvey'
    },
    {
      title: 'Bank Account GUI',
      subtitle: '| OOP | Java | Java-Swing | Eclipse |',
      text:
        'These Assignments is from OOP programming course, that try to simulate bank account GUI and implements by Java language, etc.',
      image: require('../../img/oop-final-login.png'),
      githubUrl: 'https://github.com/ping58972/Java-OOP-BankAccount'
    },
    {
      title: 'Recursion with Java OOP',
      subtitle: '| OOP | Java | Data Structure and Algorithm |',
      image: require('../../img/recursion.png'),
      text:
        'These Assignments is from Data Structure and Algorithm course, to implement Recursion with OOP  by Java language, etc.',
      githubUrl: 'https://github.com/ping58972/CSCI2082_PA4'
    },
    {
      title: 'Simple Parser Linked Stack',
      subtitle: '| OOP | Java | Data Structure and Algorithm |',
      image: require('../../img/LinkedStack.png'),
      text:
        'These Assignments is from Data Structure and Algorithm course, to implement check error of file by using Linked Stack, and display where the error line been., and implements by Java language and Swing framework, etc.',
      githubUrl: 'https://github.com/ping58972/CSCI2082_Java_PA3'
    },
    {
      title: 'Balanced BST Tree Data Structure',
      subtitle: '| OOP | Java | Eclipse |',
      text:
        'These Assignments is from Data Structure and Algorithm course, to implement BalancedBST data structure tree, and display to GUI, and implements by Java language, etc.',
      githubUrl: 'https://github.com/ping58972/CSCI-PA5-BalancedBST-tree'
    },
    {
      title: 'Sorting Algorithm GUI',
      subtitle: '| OOP | Java | Java-Swing | Eclipse |',
      image: require('../../img/javapa7.png'),
      text:
        'These Assignments is from OOP programming course, sorting algorithm that sort the objects of products class implements by Java language, etc.',
      githubUrl: 'https://github.com/ping58972/Java-OOP-sorting-algorithm'
    },
    {
      title: 'College Manager GUI',
      subtitle: '| OOP | Java | Java-Swing | Eclipse |',
      image: require('../../img/CollegeManager.jpg'),
      text:
        'These Assignments is from OOP programming course, that implement student register class on the broad, and implements by Java language and Swing framwork, etc.',
      githubUrl: 'https://github.com/ping58972/college-manager-pa2-java-oop'
    },
    {
      title: 'All Assignments CSCI2016',
      subtitle: '| Assembly MIPS | MARIE |',
      text:
        'These Assignments is from Computer Organization and Architecture course, CSCI2016 that include MARIE Simulator and MARS 4.5 software, and their codes. these Assembly MIPS language teached me about fundamental computer hardware and its architecture, etc.',
      githubUrl:
        'https://github.com/ping58972/Computer-Organization-Architecture'
    },
    {
      title: 'All Assignments CSCI1082',
      subtitle: '| OOP | Java | Eclipse |',
      text:
        'These Assignments is from OOP programming course implements by Java language, etc.',
      githubUrl: 'https://github.com/ping58972/CSCI1082-Java-OOP-Assignments'
    },
    {
      title: 'All Assignments CSCI1081',
      subtitle: '| C/C++ | Microsoft Visual Studio 2017 |',
      text:
        'These Assignments is from functional programming course implements by C/C++ language, etc.',
      githubUrl: 'https://github.com/ping58972/CSCI1081-Cpp-Assignments-all'
    }
  ];

  return <SlideDisplay projectArray={projects} bgColor='#3e3947' />;
};

export default CollegeProject;
