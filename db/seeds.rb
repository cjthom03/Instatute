# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


#----Can be used to delete the tables, but prefer using 'rails db:setup' instead
# [User, Course].each do |table|
#   ActiveRecord::Base.connection.execute("TRUNCATE #{table.table_name}")
# end

#USERS
#-----------------------------------------------------------------------
User.create!(
  full_name: "Demo User", email: "fluffy_Kittens_187@kitties.com", password: "password123"
)

User.create!(
  full_name: "Charles Thomas", email: "cjthom03@gmail.com", password: "password"
)

#COURSES
#-----------------------------------------------------------------------

# 10.times do |i|
#   Course.create!(
#     title: "Course #{i+1} Title: this title is extra long to test css wraps",
#     author: "Author Name #{i+1}",
#     description: "This description ##{i+1}does not matter yet, it is not being used.",
#     image_url: "https://xyleme.com/wp-content/uploads/2015/04/Image-Blog-Want-To-Know-What-Personalized-Learning-Looks-Like.png"
#   )
# end

# Course.create!(
#   "title": "Displacement, velocity, and time",
#   "author": Faker::Name.name,
#   "description": "In this tutorial we begin to explore ideas of velocity and acceleration. We do exciting things like throw things off cliffs (far safer on paper than in real life) and see how high a ball will fly in the air.",
#   "image_url": "https://s3-us-west-1.amazonaws.com/cjthom03-udemyclone/Assets/Courses/c1.jpg"
# )
#
# Course.create!(
#   title: "Acceleration",
#   author: Faker::Name.name,
#   description: "In physics, acceleration is the rate of change of velocity of an object with respect to time. An object's acceleration is the net result of any and all forces acting on the object, as described by Newton's Second Law.",
#   image_url: "https://s3-us-west-1.amazonaws.com/cjthom03-udemyclone/Assets/Courses/c2.jpg"
# )

courseArray = [
    {
        "title": "Displacement, velocity, and time",
        "author": " ",
        "description": "In this tutorial we begin to explore ideas of velocity and acceleration. We do exciting things like throw things off cliffs (far safer on paper than in real life) and see how high a ball will fly in the air.",
        "imageurl": "https://s3-us-west-1.amazonaws.com/cjthom03-udemyclone/Assets/Courses/c1.jpg"
    },
    {
        "title": "Acceleration",
        "author": " ",
        "description": "In physics, acceleration is the rate of change of velocity of an object with respect to time. An object's acceleration is the net result of any and all forces acting on the object, as described by Newton's Second Law.",
        "imageurl": "https://s3-us-west-1.amazonaws.com/cjthom03-udemyclone/Assets/Courses/c2.jpg"
    },
    {
        "title": "Kinematic formulas and projectile motion",
        "author": " ",
        "description": "The kinematic formulas are a set of formulas that relate the five kinematic variables.",
        "imageurl": "https://s3-us-west-1.amazonaws.com/cjthom03-udemyclone/Assets/Courses/c3.jpg"
    },
    {
        "title": "Overview and history of algebra",
        "author": " ",
        "description": "This topic is an overview of the fundamental ideas and tools of algebra.",
        "imageurl": "https://s3-us-west-1.amazonaws.com/cjthom03-udemyclone/Assets/Courses/c4.jpg"
    },
    {
        "title": "Introduction to variables",
        "author": " ",
        "description": "A variable is a quantity that may change within the context of a mathematical problem or experiment. Typically, we use a single letter to represent a variable. The letters , , and are common generic symbols used for variables.",
        "imageurl": "https://s3-us-west-1.amazonaws.com/cjthom03-udemyclone/Assets/Courses/c5.jpg"
    },
    {
        "title": "Substitution and evaluating expressions",
        "author": " ",
        "description": "Evaluate expressions. A variable is a letter, for example x, y or z, that represents an unspecified number. To evaluate an algebraic expression, you have to substitute a number for each variable and perform the arithmetic operations. In the example above, the variable x is equal to 6 since 6 + 6 = 12.",
        "imageurl": "https://s3-us-west-1.amazonaws.com/cjthom03-udemyclone/Assets/Courses/c6.jpg"
    },
    {
        "title": "Evaluating expressions word problems",
        "author": " ",
        "description": "This exercise uses word problems to practice evaluation of functions and formulas.",
        "imageurl": "https://s3-us-west-1.amazonaws.com/cjthom03-udemyclone/Assets/Courses/c7.jpg"
    },
    {
        "title": "Writing algebraic expressions introduction",
        "author": " ",
        "description": "In mathematics, an algebraic expression is an expression built up from integer constants, variables, and the algebraic operations (addition, subtraction, multiplication, division and exponentiation by an exponent that is a rational number)",
        "imageurl": "https://s3-us-west-1.amazonaws.com/cjthom03-udemyclone/Assets/Courses/c8.jpg"
    },
    {
        "title": "Dependent & independent variables",
        "author": " ",
        "description": "The two main variables in an experiment are the independent and dependent variable. An independent variable is the variable that is changed or controlled in a scientific experiment to test the effects on the dependent variable. A dependent variable is the variable being tested and measured in a scientific experiment.",
        "imageurl": "https://s3-us-west-1.amazonaws.com/cjthom03-udemyclone/Assets/Courses/c9.jpg"
    },
    {
        "title": "Combining like terms",
        "author": " ",
        "description": "In order to solve equations or simplify expressions, you may need to combine \"like terms\"",
        "imageurl": "https://s3-us-west-1.amazonaws.com/cjthom03-udemyclone/Assets/Courses/c10.jpg"
    },
    {
        "title": "Interpreting linear expressions",
        "author": " ",
        "description": "It is made up of two expressions set equal to each other. A linear equation is special because: It has one or two variables. No variable in a linear equation is raised to a power greater than 1 or used as the denominator of a fraction.",
        "imageurl": "https://s3-us-west-1.amazonaws.com/cjthom03-udemyclone/Assets/Courses/c11.jpg"
    },
    {
        "title": "Division by zero",
        "author": " ",
        "description": "In ordinary arithmetic, the expression has no meaning, as there is no number which, multiplied by 0, gives a (assuming a≠0), and so division by zero is undefined. Since any number multiplied by zero is zero, the expression 0/0 is also undefined; when it is the form of a limit, it is an indeterminate form.",
        "imageurl": "https://s3-us-west-1.amazonaws.com/cjthom03-udemyclone/Assets/Courses/c12.jpg"
    },
    {
        "title": "Introduction to nouns",
        "author": " ",
        "description": "This tutorial covers one of the English parts of speech: the noun. (More is coming soon! To quote user @Dhanishthaghosh, \"Patience bears a golden fruit!\")",
        "imageurl": "https://s3-us-west-1.amazonaws.com/cjthom03-udemyclone/Assets/Courses/c13.jpg"
    },
    {
        "title": "Types of nouns",
        "author": " ",
        "description": "There are several different types of noun.",
        "imageurl": "https://s3-us-west-1.amazonaws.com/cjthom03-udemyclone/Assets/Courses/c14.jpg"
    },
    {
        "title": "Irregular plural nouns: base plurals and irregular endings",
        "author": " ",
        "description": "In English, there are hundreds of nouns that don’t follow the standard rules for pluralization. There are no easy ways to remember them, so they generally have to be memorized.",
        "imageurl": "https://s3-us-west-1.amazonaws.com/cjthom03-udemyclone/Assets/Courses/c15.jpg"
    },
    {
        "title": "Irregular plural nouns: mutant and foreign plurals",
        "author": " ",
        "description": "An irregular plural noun is an irregular noun in the plural form. An irregular noun is a noun that becomes plural by changing its spelling in other ways than adding an “s” or “es” to the end of the word. This change can happen in a variety of ways. Below you'll find examples and guidelines to help you.",
        "imageurl": "https://s3-us-west-1.amazonaws.com/cjthom03-udemyclone/Assets/Courses/c16.jpg"
    },
    {
        "title": "GDP and the circular flow of income and expenditures",
        "author": " ",
        "description": "Circular flow of income and expenditure. Gross domestic product",
        "imageurl": "https://s3-us-west-1.amazonaws.com/cjthom03-udemyclone/Assets/Courses/c17.jpg"
    },
    {
        "title": "Components of GDP",
        "author": " ",
        "description": "The four major components that go into the calculation of the U.S. GDP, as used by the Bureau of Economic Analysis, U.S. Department of Commerce are: Personal consumption expenditures, Investment, Net exports, Government expenditure.",
        "imageurl": "https://s3-us-west-1.amazonaws.com/cjthom03-udemyclone/Assets/Courses/c18.jpg"
    },
    {
        "title": "Real and nominal GDP",
        "author": " ",
        "description": "The main difference between nominal and real values is that real values are adjusted for inflation, while nominal values are not. As a result, nominal GDP will often appear higher than real GDP.",
        "imageurl": "https://s3-us-west-1.amazonaws.com/cjthom03-udemyclone/Assets/Courses/c19.jpg"
    },
    {
        "title": "National income and inequality",
        "author": " ",
        "description": "Income inequality refers to the extent to which income is distributed in an uneven manner among a population. In the United States, income inequality, or the gap between the rich and everyone else, has been growing markedly, by every major statistical measure, for some 30 years.",
        "imageurl": "https://s3-us-west-1.amazonaws.com/cjthom03-udemyclone/Assets/Courses/c20.jpg"
    },
    {
        "title": "Scale of earth, sun, galaxy and universe",
        "author": " ",
        "description": "Things in our universe can be unimaginably large and small. In this topic, we'll try to imagine the unimaginable!",
        "imageurl": "https://s3-us-west-1.amazonaws.com/cjthom03-udemyclone/Assets/Courses/c21.jpg"
    },
    {
        "title": "Time scale of the cosmos",
        "author": " ",
        "description": "The Cosmic Calendar is a method to visualize the chronology of the universe, scaling its current age of 13.8 billion years to a single year in order to help intuit it for pedagogical purposes in science education or popular science.",
        "imageurl": "https://s3-us-west-1.amazonaws.com/cjthom03-udemyclone/Assets/Courses/c22.jpg"
    },
    {
        "title": "Light and fundamental forces",
        "author": " ",
        "description": "Strong nuclear forces are the forces that exist between the protons and neutrons inside the nucleus. Light consists of photons and strong nuclear forces are not due to proton- photon or neutron- photon interactions. ... So the only fundamental that can affect light is gravity according to me.",
        "imageurl": "https://s3-us-west-1.amazonaws.com/cjthom03-udemyclone/Assets/Courses/c23.jpg"
    },
    {
        "title": "Big bang and expansion of the universe",
        "author": " ",
        "description": "As space expanded, the universe cooled and matter formed. One second after the Big Bang, the universe was filled with neutrons, protons, electrons, anti-electrons, photons and neutrinos. During the first three minutes of the universe, the light elements were born during a process known as Big Bang nucleosynthesis.",
        "imageurl": "https://s3-us-west-1.amazonaws.com/cjthom03-udemyclone/Assets/Courses/c24.jpg"
    },
    {
        "title": "Introductino to electrical engineering",
        "author": " ",
        "description": "A summary of the math and science preparation that will help you have the best experience with electrical engineering taught on Khan Academy. Become familiar with engineering numbers and notation, and learn about the two most important electrical quantities: current and voltage.",
        "imageurl": "https://s3-us-west-1.amazonaws.com/cjthom03-udemyclone/Assets/Courses/c25.jpg"
    },
    {
        "title": "Circulatory system introduction",
        "author": " ",
        "description": "Introduction to the Cardiovascular System. The cardiovascular system is sometimes called the blood-vascular, or simply the circulatory, system. It consists of the heart, which is a muscular pumping device, and a closed system of vessels called arteries, veins, and capillaries.",
        "imageurl": "https://s3-us-west-1.amazonaws.com/cjthom03-udemyclone/Assets/Courses/c26.jpg"
    },
    {
        "title": "Respiratory system introduction",
        "author": " ",
        "description": "The respiratory system works with the circulatory system to provide this oxygen and to remove the waste products of metabolism. It also helps to regulate pH of the blood. Respiration is the sequence of events that results in the exchange of oxygen and carbon dioxide between the atmosphere and the body cells.",
        "imageurl": "https://s3-us-west-1.amazonaws.com/cjthom03-udemyclone/Assets/Courses/c27.jpg"
    },
    {
        "title": "Urinary system introduction",
        "author": " ",
        "description": "Urine is used to extract excess minerals or vitamins as well as blood corpuscles from the body. The Urinary organs include the kidneys, ureters, bladder, and urethra. The Urinary system works with the other systems of the body to help maintain homeostasis.",
        "imageurl": "https://s3-us-west-1.amazonaws.com/cjthom03-udemyclone/Assets/Courses/c28.jpg"
    },
    {
        "title": "Hematologic system introduction",
        "author": " ",
        "description": "Hematology, also spelled haematology, is the branch of medicine concerned with the study of the cause, prognosis, treatment, and prevention of diseases related to blood.[1] It involves treating diseases that affect the production of blood and its components, such as blood cells, hemoglobin, blood proteins, bone marrow, platelets, blood vessels, spleen, and the mechanism of coagulation.",
        "imageurl": "https://s3-us-west-1.amazonaws.com/cjthom03-udemyclone/Assets/Courses/c29.jpg"
    },
    {
        "title": "Immunologic system introduction",
        "author": " ",
        "description": "The immune system is a host defense system comprising many biological structures and processes within an organism that protects against disease. To function properly, an immune system must detect a wide variety of agents, known as pathogens, from viruses to parasitic worms, and distinguish them from the organism's own healthy tissue. In many species, the immune system can be classified into subsystems, such as the innate immune system versus the adaptive immune system, or humoral immunity versus cell-mediated immunity. In humans, the blood–brain barrier, blood–cerebrospinal fluid barrier, and similar fluid–brain barriers separate the peripheral immune system from the neuroimmune system, which protects the brain.",
        "imageurl": "https://s3-us-west-1.amazonaws.com/cjthom03-udemyclone/Assets/Courses/c30.jpg"
    },
    {
        "title": "We are all storytellers",
        "author": " ",
        "description": "Everyone is a storyteller. You probably tell a bunch of stories every day. We can teach you how to hone that craft. ",
        "imageurl": "https://s3-us-west-1.amazonaws.com/cjthom03-udemyclone/Assets/Courses/c31.jpg"
    },
    {
        "title": "Character",
        "author": " ",
        "description": "Characters need to be multi dimensional and dynamic.",
        "imageurl": "https://s3-us-west-1.amazonaws.com/cjthom03-udemyclone/Assets/Courses/c32.jpg"
    },
    {
        "title": "Story structure",
        "author": " ",
        "description": "There are a few key rules which will help you structure your story. ",
        "imageurl": "https://s3-us-west-1.amazonaws.com/cjthom03-udemyclone/Assets/Courses/c33.jpg"
    },
    {
        "title": "Visual language",
        "author": " ",
        "description": "Visuals are part of the storytelling. A picture is worth a thousand words.",
        "imageurl": "https://s3-us-west-1.amazonaws.com/cjthom03-udemyclone/Assets/Courses/c34.jpg"
    },
    {
        "title": "Film grammar",
        "author": " ",
        "description": "The language you use is important in film.",
        "imageurl": "https://s3-us-west-1.amazonaws.com/cjthom03-udemyclone/Assets/Courses/c35.jpg"
    },
    {
        "title": "Pitching and feedback",
        "author": " ",
        "description": "Once you have come up with your idea is is important you can sell it.",
        "imageurl": "https://s3-us-west-1.amazonaws.com/cjthom03-udemyclone/Assets/Courses/c36.jpg"
    },
    {
        "title": "Ancient cryptography",
        "author": " ",
        "description": "Explore how we have hidden secret messages through history.",
        "imageurl": "https://s3-us-west-1.amazonaws.com/cjthom03-udemyclone/Assets/Courses/c37.jpg"
    },
    {
        "title": "Modern cryptography",
        "author": " ",
        "description": "A new problem emerges in the 20th century. What happens if Alice and Bob can never meet to share a key in the first place?",
        "imageurl": "https://s3-us-west-1.amazonaws.com/cjthom03-udemyclone/Assets/Courses/c38.jpg"
    },
    {
        "title": "Randomized algorithms",
        "author": " ",
        "description": "Would access to coin flips speed up a primality test? How would this work?",
        "imageurl": "https://s3-us-west-1.amazonaws.com/cjthom03-udemyclone/Assets/Courses/c39.jpg"
    },
    {
        "title": "Ancient information theory",
        "author": " ",
        "description": "Explore the history of communication from signal fires to the Information Age",
        "imageurl": "https://s3-us-west-1.amazonaws.com/cjthom03-udemyclone/Assets/Courses/c40.jpg"
    },
    {
        "title": "Modern information theory",
        "author": " ",
        "description": "Information Theory in the 20th Century",
        "imageurl": "https://s3-us-west-1.amazonaws.com/cjthom03-udemyclone/Assets/Courses/c41.jpg"
    },
    {
        "title": "How Computers Work",
        "author": " ",
        "description": "The computer does its primary work in a part of the machine we cannot see, a control center that converts data input to information output. This control center, called the central processing unit (CPU), is a highly complex, extensive set of electronic circuitry that executes stored program instructions.",
        "imageurl": "https://s3-us-west-1.amazonaws.com/cjthom03-udemyclone/Assets/Courses/c42.jpg"
    },
    {
        "title": "How the internet works",
        "author": " ",
        "description": "Do packets simply get 'broadcast' to every computer on the Internet? ... The information used to get packets to their destinations are contained in routing tables kept by each router connected to the Internet. Routers are packet switches. A router is usually connected between networks to route packets between them.",
        "imageurl": "https://s3-us-west-1.amazonaws.com/cjthom03-udemyclone/Assets/Courses/c43.jpg"
    },
    {
        "title": "Art history basics",
        "author": " ",
        "description": "Brought to you by Smarthistory.",
        "imageurl": "https://s3-us-west-1.amazonaws.com/cjthom03-udemyclone/Assets/Courses/c44.jpg"
    },
    {
        "title": "Tools for understanding art",
        "author": " ",
        "description": "Brought to you by Smarthistory.",
        "imageurl": "https://s3-us-west-1.amazonaws.com/cjthom03-udemyclone/Assets/Courses/c45.jpg"
    },
    {
        "title": "Art 1010",
        "author": " ",
        "description": "Art 1010 is a short series of fun (and funny) animations created for the Utah System of Higher Education that introduce the history of Western art.",
        "imageurl": "https://s3-us-west-1.amazonaws.com/cjthom03-udemyclone/Assets/Courses/c46.jpg"
    },
    {
        "title": "Introduction to the atom",
        "author": " ",
        "description": "An atom is the smallest constituent unit of ordinary matter that has the properties of a chemical element. Every solid, liquid, gas, and plasma is composed of neutral or ionized atoms. Atoms are extremely small; typical sizes are around 100 picometers (a ten-billionth of a meter, in the short scale).",
        "imageurl": "https://s3-us-west-1.amazonaws.com/cjthom03-udemyclone/Assets/Courses/c47.jpg"
    },
    {
        "title": "Ions and compounds",
        "author": " ",
        "description": "In chemistry, an ionic compound is a chemical compound composed of ions held together by electrostatic forces termed ionic bonding. The compound is neutral overall, but consists of positively charged ions called cations and negatively charged ions called anions. ",
        "imageurl": "https://s3-us-west-1.amazonaws.com/cjthom03-udemyclone/Assets/Courses/c48.jpg"
    },
    {
        "title": "Names and formulas of ionic compounds",
        "author": " ",
        "description": "In chemistry, an ionic compound is a chemical compound composed of ions held together by electrostatic forces termed ionic bonding. The compound is neutral overall, but consists of positively charged ions called cations and negatively charged ions called anions. ",
        "imageurl": "https://s3-us-west-1.amazonaws.com/cjthom03-udemyclone/Assets/Courses/c49.jpg"
    },
    {
        "title": "Balancing chemical equations",
        "author": " ",
        "description": "We are now going to delve into the heart of chemistry. We learn ways of representing molecules and how molecules react. To do this, we'll even think about \"how many\" of a molecule we have using a quantity called a \"mole\".",
        "imageurl": "https://s3-us-west-1.amazonaws.com/cjthom03-udemyclone/Assets/Courses/c50.jpg"
    },
    {
        "title": "Stoichiometry",
        "author": " ",
        "description": "The relationship between the relative quantities of substances taking part in a reaction or forming a compound, typically a ratio of whole integers.",
        "imageurl": "https://s3-us-west-1.amazonaws.com/cjthom03-udemyclone/Assets/Courses/c51.jpg"
    }
]

courseArray.each do |course|
  Course.create!(
    title: course[:title],
    author: Faker::Name.name,
    description: course[:description],
    image_url: course[:imageurl]
  )
end

#Lessons
#-----------------------------------------------------------------------

lessonsArray = [
    {
        "courseid": 1,
        "order": 1,
        "title": "Introduction to physics",
        "url": "https://www.youtube.com/watch?v=uIojjqSm0m4",
        "duration": 569
    },
    {
        "courseid": 1,
        "order": 2,
        "title": "Intro to vectors and scalars",
        "url": "https://www.youtube.com/watch?v=ihNZlp7iUHE",
        "duration": 518
    },
    {
        "courseid": 1,
        "order": 3,
        "title": "Introduction to reference frames",
        "url": "https://www.youtube.com/watch?v=3yaZ7lkQPUQ",
        "duration": 414
    },
    {
        "courseid": 1,
        "order": 4,
        "title": "Calculating average velocity or speed",
        "url": "https://www.youtube.com/watch?v=oRKxmXwLvUU",
        "duration": 705
    },
    {
        "courseid": 1,
        "order": 5,
        "title": "Solving for time",
        "url": "https://www.youtube.com/watch?v=awzOvyMKeMA",
        "duration": 574
    },
    {
        "courseid": 1,
        "order": 6,
        "title": "Displacement from time and velocity example",
        "url": "https://www.youtube.com/watch?v=lQ-dvt3V4yQ",
        "duration": 299
    },
    {
        "courseid": 1,
        "order": 7,
        "title": "Instantaneous speed and velocity",
        "url": "https://www.youtube.com/watch?v=pfTTHx9kCHk",
        "duration": 277
    },
    {
        "courseid": 1,
        "order": 8,
        "title": "Position vs. time graphs",
        "url": "https://www.youtube.com/watch?v=GtoamALPOP0",
        "duration": 919
    },
    {
        "courseid": 2,
        "order": 1,
        "title": "Acceleration",
        "url": "https://www.youtube.com/watch?v=FOkQszg1-j8",
        "duration": 545
    },
    {
        "courseid": 2,
        "order": 2,
        "title": "Airbus A380 take-off time",
        "url": "https://www.youtube.com/watch?v=p4DTormtEG0",
        "duration": 487
    },
    {
        "courseid": 2,
        "order": 3,
        "title": "Airbus A380 take-off distance",
        "url": "https://www.youtube.com/watch?v=fQt69_Q2CTw",
        "duration": 329
    },
    {
        "courseid": 2,
        "order": 4,
        "title": "Why distance is area under velocity-time line",
        "url": "https://www.youtube.com/watch?v=d-_eqgj5-K8",
        "duration": 565
    },
    {
        "courseid": 2,
        "order": 5,
        "title": "Acceleration vs. time graphs",
        "url": "https://www.youtube.com/watch?v=DD58B2siDv0",
        "duration": 877
    },
    {
        "courseid": 3,
        "order": 1,
        "title": "Average velocity for constant acceleration",
        "url": "https://www.youtube.com/watch?v=MAS6mBRZZXA",
        "duration": 849
    },
    {
        "courseid": 3,
        "order": 2,
        "title": "Acceleration of aircraft carrier take-off",
        "url": "https://www.youtube.com/watch?v=VYgSXBjEA8I",
        "duration": 855
    },
    {
        "courseid": 3,
        "order": 3,
        "title": "Airbus A380 take-off distance",
        "url": "https://www.youtube.com/watch?v=fQt69_Q2CTw",
        "duration": 329
    },
    {
        "courseid": 3,
        "order": 4,
        "title": "Deriving displacement as a function of time, acceleration, and initial velocity",
        "url": "https://www.youtube.com/watch?v=wlB0x9W-qBU",
        "duration": 597
    },
    {
        "courseid": 3,
        "order": 5,
        "title": "Plotting projectile displacement, acceleration, and velocity",
        "url": "https://www.youtube.com/watch?v=T0zpF_j7Mvo",
        "duration": 977
    },
    {
        "courseid": 3,
        "order": 6,
        "title": "Projectile height given time",
        "url": "https://www.youtube.com/watch?v=IYS4Bd9F3LA",
        "duration": 485
    },
    {
        "courseid": 3,
        "order": 7,
        "title": "Deriving max projectile displacement given time",
        "url": "https://www.youtube.com/watch?v=P7LKEkcNibo",
        "duration": 428
    },
    {
        "courseid": 3,
        "order": 8,
        "title": "Impact velocity from given height",
        "url": "https://www.youtube.com/watch?v=2ZgBJxT9pbU",
        "duration": 702
    },
    {
        "courseid": 3,
        "order": 9,
        "title": "Viewing g as the value of Earth's gravitational field near the surface",
        "url": "https://www.youtube.com/watch?v=1E3Z_R5AHdg",
        "duration": 450
    },
    {
        "courseid": 3,
        "order": 10,
        "title": "Choosing kinematic equations",
        "url": "https://www.youtube.com/watch?v=P3jCdsWJa38",
        "duration": 657
    },
    {
        "courseid": 4,
        "order": 1,
        "title": "Origins of algebra",
        "url": "https://www.youtube.com/watch?v=_LDR1_Prveo",
        "duration": 437
    },
    {
        "courseid": 4,
        "order": 2,
        "title": "Abstract-ness",
        "url": "https://www.youtube.com/watch?v=ZOYRb2sYrL0",
        "duration": 419
    },
    {
        "courseid": 4,
        "order": 3,
        "title": "The beauty of algebra",
        "url": "https://www.youtube.com/watch?v=kpCJyQ2usJ4",
        "duration": 606
    },
    {
        "courseid": 4,
        "order": 4,
        "title": "Intro to the coordinate plane",
        "url": "https://www.youtube.com/watch?v=N4nrdf0yYfM",
        "duration": 681
    },
    {
        "courseid": 4,
        "order": 5,
        "title": "Why all the letters in algebra?",
        "url": "https://www.youtube.com/watch?v=Tm98lnrlbMA",
        "duration": 183
    },
    {
        "courseid": 5,
        "order": 1,
        "title": "What is a variable?",
        "url": "https://www.youtube.com/watch?v=tHYis-DP0oU",
        "duration": 197
    },
    {
        "courseid": 5,
        "order": 2,
        "title": "Why aren't we using the multiplication sign?",
        "url": "https://www.youtube.com/watch?v=vDaIKB19TvY",
        "duration": 297
    },
    {
        "courseid": 5,
        "order": 3,
        "title": "Evaluating an expression with one variable",
        "url": "https://www.youtube.com/watch?v=AJNDeVt9UOo",
        "duration": 119
    },
    {
        "courseid": 6,
        "order": 1,
        "title": "Evaluating expressions with two variables",
        "url": "https://www.youtube.com/watch?v=S_OX3ByvBSc",
        "duration": 124
    },
    {
        "courseid": 6,
        "order": 2,
        "title": "Evaluating expressions with two variables: fractions & decimals",
        "url": "https://www.youtube.com/watch?v=GmD7Czmol0k",
        "duration": 206
    },
    {
        "courseid": 7,
        "order": 1,
        "title": "Evaluating expressions with variables: temperature",
        "url": "https://www.youtube.com/watch?v=tC1SfxRvtmM",
        "duration": 74
    },
    {
        "courseid": 7,
        "order": 2,
        "title": "Evaluating expressions with variables: cubes",
        "url": "https://www.youtube.com/watch?v=I9eLKDbc8og",
        "duration": 203
    },
    {
        "courseid": 7,
        "order": 3,
        "title": "Evaluating expressions with variables: exponents",
        "url": "https://www.youtube.com/watch?v=0uCslW40VHQ",
        "duration": 161
    },
    {
        "courseid": 8,
        "order": 1,
        "title": "Writing basic expressions with variables",
        "url": "https://www.youtube.com/watch?v=640-86yn2wM",
        "duration": 156
    },
    {
        "courseid": 8,
        "order": 2,
        "title": "Writing expressions with variables",
        "url": "https://www.youtube.com/watch?v=Q1vMNyIP4Us",
        "duration": 97
    },
    {
        "courseid": 8,
        "order": 3,
        "title": "Writing expressions with variables & parentheses",
        "url": "https://www.youtube.com/watch?v=xLYVo_k0_us",
        "duration": 164
    },
    {
        "courseid": 9,
        "order": 1,
        "title": "Dependent & independent variables",
        "url": "https://www.youtube.com/watch?v=i9j_VUMq5yg",
        "duration": 129
    },
    {
        "courseid": 9,
        "order": 2,
        "title": "Dependent & independent variables: graphing",
        "url": "https://www.youtube.com/watch?v=0eWm-LY23W0",
        "duration": 59
    },
    {
        "courseid": 9,
        "order": 3,
        "title": "Dependent & independent variables: equation",
        "url": "https://www.youtube.com/watch?v=3ACF7L-7Vsg",
        "duration": 119
    },
    {
        "courseid": 10,
        "order": 1,
        "title": "Intro to combining like terms",
        "url": "https://www.youtube.com/watch?v=CLWpkv6ccpA",
        "duration": 272
    },
    {
        "courseid": 10,
        "order": 2,
        "title": "Simplifying expressions",
        "url": "https://www.youtube.com/watch?v=3NHSwiv_pSE",
        "duration": 246
    },
    {
        "courseid": 10,
        "order": 3,
        "title": "Combining like terms challenge problem",
        "url": "https://www.youtube.com/watch?v=FNnmseBlvaY",
        "duration": 278
    },
    {
        "courseid": 10,
        "order": 4,
        "title": "Simplifying expressions with rational numbers",
        "url": "https://www.youtube.com/watch?v=rtNuo7R3scY",
        "duration": 255
    },
    {
        "courseid": 11,
        "order": 1,
        "title": "Interpreting linear expressions: diamonds",
        "url": "https://www.youtube.com/watch?v=ao9cx8JlJIU",
        "duration": 111
    },
    {
        "courseid": 11,
        "order": 2,
        "title": "Interpreting linear expressions: flowers",
        "url": "https://www.youtube.com/watch?v=edVnqL2Z59A",
        "duration": 121
    },
    {
        "courseid": 12,
        "order": 1,
        "title": "Why dividing by zero is undefined",
        "url": "https://www.youtube.com/watch?v=SQzjzStU1RQ",
        "duration": 247
    },
    {
        "courseid": 12,
        "order": 2,
        "title": "The problem with dividing zero by zero",
        "url": "https://www.youtube.com/watch?v=PDReqvXfkBA",
        "duration": 145
    },
    {
        "courseid": 12,
        "order": 3,
        "title": "Undefined & indeterminate expressions",
        "url": "https://www.youtube.com/watch?v=lHdlHTsXbZg",
        "duration": 451
    },
    {
        "courseid": 13,
        "order": 1,
        "title": "Introduction to nouns",
        "url": "https://www.youtube.com/watch?v=UejW-WQpujs",
        "duration": 267
    },
    {
        "courseid": 13,
        "order": 2,
        "title": "Introduction to singular and plural nouns",
        "url": "https://www.youtube.com/watch?v=ETzngG8N3AU",
        "duration": 274
    },
    {
        "courseid": 14,
        "order": 1,
        "title": "Common and proper nouns",
        "url": "https://www.youtube.com/watch?v=bGz1acC3Wew",
        "duration": 171
    },
    {
        "courseid": 14,
        "order": 2,
        "title": "Concrete and abstract nouns",
        "url": "https://www.youtube.com/watch?v=3AF_rN-yN-Y",
        "duration": 222
    },
    {
        "courseid": 15,
        "order": 1,
        "title": "Irregular plural nouns – -f to -ves",
        "url": "https://www.youtube.com/watch?v=2bx7yjLC01M",
        "duration": 153
    },
    {
        "courseid": 15,
        "order": 2,
        "title": "Irregular plural nouns – words that end in -en",
        "url": "https://www.youtube.com/watch?v=n9poHOKkF28",
        "duration": 442
    },
    {
        "courseid": 15,
        "order": 3,
        "title": "Irregular plural nouns – base plurals",
        "url": "https://www.youtube.com/watch?v=UnJmPywSSvg",
        "duration": 306
    },
    {
        "courseid": 16,
        "order": 1,
        "title": "Irregular plural nouns – the MUTANT PLURALS",
        "url": "https://www.youtube.com/watch?v=VdLOP9teko4",
        "duration": 161
    },
    {
        "courseid": 16,
        "order": 2,
        "title": "Irregular plural nouns – foreign plurals",
        "url": "https://www.youtube.com/watch?v=L6pH8O3B4ak",
        "duration": 296
    },
    {
        "courseid": 16,
        "order": 3,
        "title": "BONUS VIDEO – Origin of the Mutant Plural",
        "url": "https://www.youtube.com/watch?v=c3FoTqLB9zg",
        "duration": 352
    },
    {
        "courseid": 17,
        "order": 1,
        "title": "Introduction to economics",
        "url": "https://www.youtube.com/watch?v=8JYP_wU1JTU",
        "duration": 598
    },
    {
        "courseid": 17,
        "order": 2,
        "title": "Circular flow of income and expenditures",
        "url": "https://www.youtube.com/watch?v=Hfz1bwK5C4o",
        "duration": 537
    },
    {
        "courseid": 17,
        "order": 3,
        "title": "Parsing gross domestic product",
        "url": "https://www.youtube.com/watch?v=zh8XASZxo1Q",
        "duration": 718
    },
    {
        "courseid": 17,
        "order": 4,
        "title": "More on final and intermediate GDP contributions",
        "url": "https://www.youtube.com/watch?v=C1pHvEAKmLA",
        "duration": 169
    },
    {
        "courseid": 18,
        "order": 1,
        "title": "Investment and consumption",
        "url": "https://www.youtube.com/watch?v=N9VIsauE0RA",
        "duration": 451
    },
    {
        "courseid": 18,
        "order": 2,
        "title": "Income and expenditure views of GDP",
        "url": "https://www.youtube.com/watch?v=Z9b8nnvpim0",
        "duration": 288
    },
    {
        "courseid": 18,
        "order": 3,
        "title": "Components of GDP",
        "url": "https://www.youtube.com/watch?v=Rgr1vRjxzFg",
        "duration": 297
    },
    {
        "courseid": 18,
        "order": 4,
        "title": "Examples of accounting for GDP",
        "url": "https://www.youtube.com/watch?v=BMNj7-Okclk",
        "duration": 357
    },
    {
        "courseid": 19,
        "order": 1,
        "title": "Real GDP and nominal GDP",
        "url": "https://www.youtube.com/watch?v=lBDT2w5Wl84",
        "duration": 483
    },
    {
        "courseid": 19,
        "order": 2,
        "title": "GDP deflator",
        "url": "https://www.youtube.com/watch?v=L-0LuSw2bTM",
        "duration": 387
    },
    {
        "courseid": 19,
        "order": 3,
        "title": "Example calculating real GDP with a deflator",
        "url": "https://www.youtube.com/watch?v=v5YT8GlSxoU",
        "duration": 338
    },
    {
        "courseid": 20,
        "order": 1,
        "title": "Capital by Thomas Piketty",
        "url": "https://www.youtube.com/watch?v=i78cyClvaeg",
        "duration": 231
    },
    {
        "courseid": 20,
        "order": 2,
        "title": "Difference between wealth and income",
        "url": "https://www.youtube.com/watch?v=o5-T52bh-eQ",
        "duration": 271
    },
    {
        "courseid": 20,
        "order": 3,
        "title": "What is capital?",
        "url": "https://www.youtube.com/watch?v=-epr8lPIZYE",
        "duration": 569
    },
    {
        "courseid": 20,
        "order": 4,
        "title": "Piketty's two drivers of divergence",
        "url": "https://www.youtube.com/watch?v=ZmqK0X1psDA",
        "duration": 586
    },
    {
        "courseid": 20,
        "order": 5,
        "title": "Is rising inequality necessarily bad?",
        "url": "https://www.youtube.com/watch?v=r5L-riaIJjI",
        "duration": 511
    },
    {
        "courseid": 20,
        "order": 6,
        "title": "Convergence on macro scale",
        "url": "https://www.youtube.com/watch?v=scgd0gh6BFs",
        "duration": 204
    },
    {
        "courseid": 20,
        "order": 7,
        "title": "Education as a force of convergence",
        "url": "https://www.youtube.com/watch?v=Qu7aVEUc-2w",
        "duration": 701
    },
    {
        "courseid": 20,
        "order": 8,
        "title": "Gilded Age versus Silicon Valley",
        "url": "https://www.youtube.com/watch?v=GQBRWjHdir0",
        "duration": 430
    },
    {
        "courseid": 20,
        "order": 9,
        "title": "Inverse relationship between capital price and returns",
        "url": "https://www.youtube.com/watch?v=gplD1LV-lAA",
        "duration": 509
    },
    {
        "courseid": 20,
        "order": 10,
        "title": "Connecting income to capital growth and potential inequality",
        "url": "https://www.youtube.com/watch?v=iPROoc_o0p8",
        "duration": 415
    },
    {
        "courseid": 20,
        "order": 11,
        "title": "r greater than g but less inequality",
        "url": "https://www.youtube.com/watch?v=w6O2Rxub6VE",
        "duration": 496
    },
    {
        "courseid": 20,
        "order": 12,
        "title": "Return on capital and economic growth",
        "url": "https://www.youtube.com/watch?v=ir-ISPDjGno",
        "duration": 547
    },
    {
        "courseid": 20,
        "order": 13,
        "title": "Critically looking at data on ROC and economic growth over millenia",
        "url": "https://www.youtube.com/watch?v=mkyPZjkdU2Q",
        "duration": 345
    },
    {
        "courseid": 20,
        "order": 14,
        "title": "Simple model to understand r and g relationship",
        "url": "https://www.youtube.com/watch?v=--VYlmbkzNY",
        "duration": 465
    },
    {
        "courseid": 21,
        "order": 1,
        "title": "Scale of the large",
        "url": "https://www.youtube.com/watch?v=5FEjrStgcF8",
        "duration": 662
    },
    {
        "courseid": 21,
        "order": 2,
        "title": "Scale of the small",
        "url": "https://www.youtube.com/watch?v=ERKx3Oa2omo",
        "duration": 793
    },
    {
        "courseid": 21,
        "order": 3,
        "title": "Scale of earth and sun",
        "url": "https://www.youtube.com/watch?v=GZx3U0dbASg",
        "duration": 570
    },
    {
        "courseid": 21,
        "order": 4,
        "title": "Scale of solar system",
        "url": "https://www.youtube.com/watch?v=GP53b__h4ew",
        "duration": 750
    },
    {
        "courseid": 21,
        "order": 5,
        "title": "Scale of distance to closest stars",
        "url": "https://www.youtube.com/watch?v=jEeJkkMXt6c",
        "duration": 487
    },
    {
        "courseid": 21,
        "order": 6,
        "title": "Scale of the galaxy",
        "url": "https://www.youtube.com/watch?v=rcLnMe1ELPA",
        "duration": 774
    },
    {
        "courseid": 21,
        "order": 7,
        "title": "Intergalactic scale",
        "url": "https://www.youtube.com/watch?v=JiE_kNk3ucI",
        "duration": 649
    },
    {
        "courseid": 21,
        "order": 8,
        "title": "Hubble image of galaxies",
        "url": "https://www.youtube.com/watch?v=Wl4re38deh0",
        "duration": 251
    },
    {
        "courseid": 22,
        "order": 1,
        "title": "Cosmological time scale 1",
        "url": "https://www.youtube.com/watch?v=DRtLXagrMHw",
        "duration": 426
    },
    {
        "courseid": 22,
        "order": 2,
        "title": "Cosmological time scale 2",
        "url": "https://www.youtube.com/watch?v=LO7-3MpWijU",
        "duration": 377
    },
    {
        "courseid": 23,
        "order": 1,
        "title": "Introduction to light",
        "url": "https://www.youtube.com/watch?v=rLNM8zI4Q_M",
        "duration": 576
    },
    {
        "courseid": 23,
        "order": 2,
        "title": "Four fundamental forces",
        "url": "https://www.youtube.com/watch?v=FEF6PxWOvsk",
        "duration": 629
    },
    {
        "courseid": 24,
        "order": 1,
        "title": "Big bang introduction",
        "url": "https://www.youtube.com/watch?v=eUF59jCFcyQ",
        "duration": 662
    },
    {
        "courseid": 24,
        "order": 2,
        "title": "Radius of observable universe",
        "url": "https://www.youtube.com/watch?v=6nVysrZQnOQ",
        "duration": 998
    },
    {
        "courseid": 24,
        "order": 3,
        "title": "Radius of observable universe (correction)",
        "url": "https://www.youtube.com/watch?v=b6VQv76BQDs",
        "duration": 134
    },
    {
        "courseid": 24,
        "order": 4,
        "title": "Red shift",
        "url": "https://www.youtube.com/watch?v=mx2M_ZKXM_c",
        "duration": 603
    },
    {
        "courseid": 24,
        "order": 5,
        "title": "Cosmic background radiation",
        "url": "https://www.youtube.com/watch?v=sxbPwl_KRuA",
        "duration": 695
    },
    {
        "courseid": 24,
        "order": 6,
        "title": "Cosmic background radiation 2",
        "url": "https://www.youtube.com/watch?v=06z7Q8TWPyU",
        "duration": 615
    },
    {
        "courseid": 24,
        "order": 7,
        "title": "Hubble's law",
        "url": "https://www.youtube.com/watch?v=1V9wVmO0Tfg",
        "duration": 671
    },
    {
        "courseid": 24,
        "order": 8,
        "title": "A universe smaller than the observable",
        "url": "https://www.youtube.com/watch?v=0w9R_foNLrg",
        "duration": 537
    },
    {
        "courseid": 25,
        "order": 1,
        "title": "Electric current",
        "url": "https://www.youtube.com/watch?v=ZRLXDiiUv8Q",
        "duration": 557
    },
    {
        "courseid": 25,
        "order": 2,
        "title": "Current direction",
        "url": "https://www.youtube.com/watch?v=4frpZ4Q0q58",
        "duration": 327
    },
    {
        "courseid": 25,
        "order": 3,
        "title": "Voltage",
        "url": "https://www.youtube.com/watch?v=k9SwNST1eW0",
        "duration": 178
    },
    {
        "courseid": 25,
        "order": 4,
        "title": "Conventional current",
        "url": "https://www.youtube.com/watch?v=17EhKw2tsu4",
        "duration": 236
    },
    {
        "courseid": 26,
        "order": 1,
        "title": "Meet the heart!",
        "url": "https://www.youtube.com/watch?v=Vi1JK6IYVt8",
        "duration": 608
    },
    {
        "courseid": 26,
        "order": 2,
        "title": "Flow through the heart",
        "url": "https://www.youtube.com/watch?v=7XaftdE_h60",
        "duration": 470
    },
    {
        "courseid": 26,
        "order": 3,
        "title": "Two circulations in the body",
        "url": "https://www.youtube.com/watch?v=K57qjYYjgIY",
        "duration": 744
    },
    {
        "courseid": 26,
        "order": 4,
        "title": "Lub dub",
        "url": "https://www.youtube.com/watch?v=-4kGMI-qQ3I",
        "duration": 589
    },
    {
        "courseid": 26,
        "order": 5,
        "title": "Layers of the heart",
        "url": "https://www.youtube.com/watch?v=bm65xCS5ivo",
        "duration": 747
    },
    {
        "courseid": 26,
        "order": 6,
        "title": "Thermoregulation in the circulatory system",
        "url": "https://www.youtube.com/watch?v=C_LiAEjuIIc",
        "duration": 421
    },
    {
        "courseid": 26,
        "order": 7,
        "title": "Arteries vs. veins - what's the difference?",
        "url": "https://www.youtube.com/watch?v=lXkfZYlnwl4",
        "duration": 463
    },
    {
        "courseid": 26,
        "order": 8,
        "title": "Arteries, arterioles, venules, and veins",
        "url": "https://www.youtube.com/watch?v=iqRTd1NY-pU",
        "duration": 462
    },
    {
        "courseid": 26,
        "order": 9,
        "title": "Circulatory system and the heart",
        "url": "https://www.youtube.com/watch?v=QhiVnFvshZg",
        "duration": 896
    },
    {
        "courseid": 27,
        "order": 1,
        "title": "Meet the lungs",
        "url": "https://www.youtube.com/watch?v=qGiPZf7njqY",
        "duration": 576
    },
    {
        "courseid": 27,
        "order": 2,
        "title": "People and plants",
        "url": "https://www.youtube.com/watch?v=lzWUG4H5QBo",
        "duration": 569
    },
    {
        "courseid": 27,
        "order": 3,
        "title": "The bronchial tree",
        "url": "https://www.youtube.com/watch?v=Z-yv3Yq4Aw4",
        "duration": 766
    },
    {
        "courseid": 27,
        "order": 4,
        "title": "Inhaling and exhaling",
        "url": "https://www.youtube.com/watch?v=mykrnTh1tz8",
        "duration": 778
    },
    {
        "courseid": 27,
        "order": 5,
        "title": "How does lung volume change?",
        "url": "https://www.youtube.com/watch?v=dTsUyXXudvA",
        "duration": 489
    },
    {
        "courseid": 27,
        "order": 6,
        "title": "Thermoregulation in the lungs",
        "url": "https://www.youtube.com/watch?v=Iya-2bS14ho",
        "duration": 292
    },
    {
        "courseid": 27,
        "order": 7,
        "title": "The lungs and pulmonary system",
        "url": "https://www.youtube.com/watch?v=SPGRkexI_cs",
        "duration": 1232
    },
    {
        "courseid": 28,
        "order": 1,
        "title": "Meet the kidneys!",
        "url": "https://www.youtube.com/watch?v=mcQQGGShmLs",
        "duration": 383
    },
    {
        "courseid": 28,
        "order": 2,
        "title": "Kidney function and anatomy",
        "url": "https://www.youtube.com/watch?v=ctGkLYuUCvU",
        "duration": 477
    },
    {
        "courseid": 28,
        "order": 3,
        "title": "Glomerular filtration in the nephron",
        "url": "https://www.youtube.com/watch?v=wWsdcfGta4k",
        "duration": 437
    },
    {
        "courseid": 28,
        "order": 4,
        "title": "Changing glomerular filtration rate",
        "url": "https://www.youtube.com/watch?v=x0pFo1RxTzM",
        "duration": 264
    },
    {
        "courseid": 28,
        "order": 5,
        "title": "Countercurrent multiplication in the kidney",
        "url": "https://www.youtube.com/watch?v=Vqce2dtg45U",
        "duration": 652
    },
    {
        "courseid": 28,
        "order": 6,
        "title": "Urination",
        "url": "https://www.youtube.com/watch?v=rheO1tVyB0U",
        "duration": 572
    },
    {
        "courseid": 28,
        "order": 7,
        "title": "The kidney and nephron",
        "url": "https://www.youtube.com/watch?v=cc8sUv2SuaY",
        "duration": 1117
    },
    {
        "courseid": 28,
        "order": 8,
        "title": "Secondary active transport in the nephron",
        "url": "https://www.youtube.com/watch?v=czY5nyvZ7cU",
        "duration": 852
    },
    {
        "courseid": 29,
        "order": 1,
        "title": "What's inside of blood?",
        "url": "https://www.youtube.com/watch?v=5MOn8X-tyFw",
        "duration": 668
    },
    {
        "courseid": 29,
        "order": 2,
        "title": "Red blood cells",
        "url": "https://www.youtube.com/watch?v=fLKOBQ6cZHA",
        "duration": 989
    },
    {
        "courseid": 29,
        "order": 3,
        "title": "Blood types",
        "url": "https://www.youtube.com/watch?v=Nnqp_3HMlDU",
        "duration": 532
    },
    {
        "courseid": 29,
        "order": 4,
        "title": "Blood cell lineages",
        "url": "https://www.youtube.com/watch?v=ddifthdMNVc",
        "duration": 483
    },
    {
        "courseid": 29,
        "order": 5,
        "title": "Life and times of RBCs and platelets",
        "url": "https://www.youtube.com/watch?v=UBlem4dGLGU",
        "duration": 634
    },
    {
        "courseid": 29,
        "order": 6,
        "title": "Hemoglobin",
        "url": "https://www.youtube.com/watch?v=LWtXthfG9_M",
        "duration": 873
    },
    {
        "courseid": 29,
        "order": 7,
        "title": "Hemoglobin moves O2 and CO2",
        "url": "https://www.youtube.com/watch?v=QP8ImP6NCk8",
        "duration": 897
    },
    {
        "courseid": 29,
        "order": 8,
        "title": "Fetal hemoglobin and hematocrit",
        "url": "https://www.youtube.com/watch?v=SqE5S1qS7ZU",
        "duration": 871
    },
    {
        "courseid": 29,
        "order": 9,
        "title": "Oxygen content",
        "url": "https://www.youtube.com/watch?v=a19T5CX2b-g",
        "duration": 672
    },
    {
        "courseid": 29,
        "order": 10,
        "title": "How do we make blood clots?",
        "url": "https://www.youtube.com/watch?v=RQpBj8ebbNY",
        "duration": 704
    },
    {
        "courseid": 29,
        "order": 11,
        "title": "Coagulation cascade",
        "url": "https://www.youtube.com/watch?v=FNVvQ788wzk",
        "duration": 878
    },
    {
        "courseid": 29,
        "order": 12,
        "title": "Bohr effect vs. Haldane effect",
        "url": "https://www.youtube.com/watch?v=dHi9ctwDUnc",
        "duration": 832
    },
    {
        "courseid": 30,
        "order": 1,
        "title": "Role of phagocytes in innate or nonspecific immunity",
        "url": "https://www.youtube.com/watch?v=O1N2rENXq_Y",
        "duration": 979
    },
    {
        "courseid": 30,
        "order": 2,
        "title": "Types of immune responses: Innate and adaptive, humoral vs. cell-mediated",
        "url": "https://www.youtube.com/watch?v=rp7T4IItbtM",
        "duration": 486
    },
    {
        "courseid": 30,
        "order": 3,
        "title": "B lymphocytes (B cells)",
        "url": "https://www.youtube.com/watch?v=Z36dUduOk1Y",
        "duration": 852
    },
    {
        "courseid": 30,
        "order": 4,
        "title": "Professional antigen presenting cells (APC) and MHC II complexes",
        "url": "https://www.youtube.com/watch?v=j_kSmmEpvQk",
        "duration": 692
    },
    {
        "courseid": 30,
        "order": 5,
        "title": "Helper T cells",
        "url": "https://www.youtube.com/watch?v=uwMYpTYsNZM",
        "duration": 1233
    },
    {
        "courseid": 30,
        "order": 6,
        "title": "Cytotoxic T cells",
        "url": "https://www.youtube.com/watch?v=oqI4skjr6lQ",
        "duration": 606
    },
    {
        "courseid": 30,
        "order": 7,
        "title": "Review of B cells, CD4+ T cells and CD8+ T cells",
        "url": "https://www.youtube.com/watch?v=xaz5ftvZCyI",
        "duration": 666
    },
    {
        "courseid": 30,
        "order": 8,
        "title": "Clonal selection",
        "url": "https://www.youtube.com/watch?v=EsQyCHs4IBY",
        "duration": 588
    },
    {
        "courseid": 30,
        "order": 9,
        "title": "Self vs. non-self immunity",
        "url": "https://www.youtube.com/watch?v=afM6_VFaIss",
        "duration": 868
    },
    {
        "courseid": 30,
        "order": 10,
        "title": "How white blood cells move around",
        "url": "https://www.youtube.com/watch?v=LXFQG4Ugreo",
        "duration": 527
    },
    {
        "courseid": 30,
        "order": 11,
        "title": "Inflammatory response",
        "url": "https://www.youtube.com/watch?v=FXSuEIMrPQk",
        "duration": 874
    },
    {
        "courseid": 30,
        "order": 12,
        "title": "Blood cell lineages",
        "url": "https://www.youtube.com/watch?v=97nFwkRiNCc",
        "duration": 499
    },
    {
        "courseid": 31,
        "order": 1,
        "title": "Introduction to storytelling",
        "url": "https://www.youtube.com/watch?v=1rMnzNZkIX0",
        "duration": 177
    },
    {
        "courseid": 31,
        "order": 2,
        "title": "Your unique perspective",
        "url": "https://www.youtube.com/watch?v=1mTO_ax-M3Q",
        "duration": 251
    },
    {
        "courseid": 31,
        "order": 3,
        "title": "Your favorite stories",
        "url": "https://www.youtube.com/watch?v=7HLTDlGkkX4",
        "duration": 185
    },
    {
        "courseid": 31,
        "order": 4,
        "title": "What if...",
        "url": "https://www.youtube.com/watch?v=m5AW93Ya0UE",
        "duration": 119
    },
    {
        "courseid": 31,
        "order": 5,
        "title": "World & character",
        "url": "https://www.youtube.com/watch?v=tREPH6hJsYg",
        "duration": 180
    },
    {
        "courseid": 31,
        "order": 6,
        "title": "Advice",
        "url": "https://www.youtube.com/watch?v=NL0KQu9JiDQ",
        "duration": 185
    },
    {
        "courseid": 32,
        "order": 1,
        "title": "Introduction to character",
        "url": "https://www.youtube.com/watch?v=ngZQUebMSEg",
        "duration": 188
    },
    {
        "courseid": 32,
        "order": 2,
        "title": "Internal vs. external features",
        "url": "https://www.youtube.com/watch?v=Yl_okKqVXKo",
        "duration": 302
    },
    {
        "courseid": 32,
        "order": 3,
        "title": "Wants vs. needs",
        "url": "https://www.youtube.com/watch?v=RgRfbvLkvnI",
        "duration": 251
    },
    {
        "courseid": 32,
        "order": 4,
        "title": "Obstacles",
        "url": "https://www.youtube.com/watch?v=ZyNvgFmBQTs",
        "duration": 192
    },
    {
        "courseid": 32,
        "order": 5,
        "title": "Character arc",
        "url": "https://www.youtube.com/watch?v=figcC-ANUu4",
        "duration": 290
    },
    {
        "courseid": 32,
        "order": 6,
        "title": "Stakes",
        "url": "https://www.youtube.com/watch?v=WJ_iNkkgdCA",
        "duration": 283
    },
    {
        "courseid": 32,
        "order": 7,
        "title": "Advice",
        "url": "https://www.youtube.com/watch?v=SgGARYH2vRg",
        "duration": 297
    },
    {
        "courseid": 33,
        "order": 1,
        "title": "Introduction to structure",
        "url": "https://www.youtube.com/watch?v=bKrCKg9ggVI",
        "duration": 236
    },
    {
        "courseid": 33,
        "order": 2,
        "title": "Story spine",
        "url": "https://www.youtube.com/watch?v=ilDsFrcHsuI",
        "duration": 314
    },
    {
        "courseid": 33,
        "order": 3,
        "title": "Theme",
        "url": "https://www.youtube.com/watch?v=SQUEgcJeLoM",
        "duration": 270
    },
    {
        "courseid": 33,
        "order": 4,
        "title": "Act 1",
        "url": "https://www.youtube.com/watch?v=eCxo5PqI2bU",
        "duration": 298
    },
    {
        "courseid": 33,
        "order": 5,
        "title": "Act 2",
        "url": "https://www.youtube.com/watch?v=9BusKC3kcb8",
        "duration": 287
    },
    {
        "courseid": 33,
        "order": 6,
        "title": "Act 3",
        "url": "https://www.youtube.com/watch?v=TEVaUEQqLBk",
        "duration": 328
    },
    {
        "courseid": 33,
        "order": 7,
        "title": "Advice",
        "url": "https://www.youtube.com/watch?v=Wv5bPHwihl8",
        "duration": 193
    },
    {
        "courseid": 34,
        "order": 1,
        "title": "Introduction to visual language",
        "url": "https://www.youtube.com/watch?v=g1p3WmulKbs",
        "duration": 182
    },
    {
        "courseid": 34,
        "order": 2,
        "title": "Line",
        "url": "https://www.youtube.com/watch?v=_m0OLrgGTgY",
        "duration": 388
    },
    {
        "courseid": 34,
        "order": 3,
        "title": "Shape",
        "url": "https://www.youtube.com/watch?v=twlbbFITOxg",
        "duration": 331
    },
    {
        "courseid": 34,
        "order": 4,
        "title": "Space",
        "url": "https://www.youtube.com/watch?v=FedOS-whKuM",
        "duration": 294
    },
    {
        "courseid": 34,
        "order": 5,
        "title": "Motion",
        "url": "https://www.youtube.com/watch?v=uv7pkNw0PKE",
        "duration": 289
    },
    {
        "courseid": 34,
        "order": 6,
        "title": "Tone",
        "url": "https://www.youtube.com/watch?v=SzVrFaNuU6w",
        "duration": 301
    },
    {
        "courseid": 34,
        "order": 7,
        "title": "Color",
        "url": "https://www.youtube.com/watch?v=WUZ6N7n7tDw",
        "duration": 307
    },
    {
        "courseid": 34,
        "order": 8,
        "title": "Advice",
        "url": "https://www.youtube.com/watch?v=6rEh6K56KYc",
        "duration": 319
    },
    {
        "courseid": 35,
        "order": 1,
        "title": "Introduction to film grammar",
        "url": "https://www.youtube.com/watch?v=Uty6buQ61ZA",
        "duration": 206
    },
    {
        "courseid": 35,
        "order": 2,
        "title": "Major vs. minor beats",
        "url": "https://www.youtube.com/watch?v=XKvPEFVv3o4",
        "duration": 256
    },
    {
        "courseid": 35,
        "order": 3,
        "title": "Basic shot types",
        "url": "https://www.youtube.com/watch?v=VeD9ofd4_xI",
        "duration": 266
    },
    {
        "courseid": 35,
        "order": 4,
        "title": "Extreme shots",
        "url": "https://www.youtube.com/watch?v=B-KHAXwCnJY",
        "duration": 277
    },
    {
        "courseid": 35,
        "order": 5,
        "title": "Dynamics shots",
        "url": "https://www.youtube.com/watch?v=hCTYiAlHkXg",
        "duration": 261
    },
    {
        "courseid": 35,
        "order": 6,
        "title": "Storyboarding",
        "url": "https://www.youtube.com/watch?v=VMQIlb7t2v4",
        "duration": 709
    },
    {
        "courseid": 35,
        "order": 7,
        "title": "Advice",
        "url": "https://www.youtube.com/watch?v=4VAdGlprSTI",
        "duration": 250
    },
    {
        "courseid": 36,
        "order": 1,
        "title": "Introduction to pitching and feedback",
        "url": "https://www.youtube.com/watch?v=74snIJ2eu7A",
        "duration": 174
    },
    {
        "courseid": 36,
        "order": 2,
        "title": "Pitching",
        "url": "https://www.youtube.com/watch?v=paRq17P0tYk",
        "duration": 418
    },
    {
        "courseid": 36,
        "order": 3,
        "title": "Giving feedback",
        "url": "https://www.youtube.com/watch?v=sR3t-eRrhbU",
        "duration": 351
    },
    {
        "courseid": 36,
        "order": 4,
        "title": "Digesting feedback",
        "url": "https://www.youtube.com/watch?v=5Wov_HG9AGs",
        "duration": 356
    },
    {
        "courseid": 36,
        "order": 5,
        "title": "Storyreels",
        "url": "https://www.youtube.com/watch?v=BXU8Icg4cHQ",
        "duration": 421
    },
    {
        "courseid": 36,
        "order": 6,
        "title": "Advice",
        "url": "https://www.youtube.com/watch?v=6Ih6XSD0BTU",
        "duration": 257
    },
    {
        "courseid": 36,
        "order": 7,
        "title": "A thank you from John Lasseter",
        "url": "https://www.youtube.com/watch?v=Mi-N9Eg3hT4",
        "duration": 277
    },
    {
        "courseid": 37,
        "order": 1,
        "title": "What is cryptography?",
        "url": "https://www.youtube.com/watch?v=Kf9KjCKmDcU",
        "duration": 90
    },
    {
        "courseid": 37,
        "order": 2,
        "title": "The Caesar cipher",
        "url": "https://www.youtube.com/watch?v=sMOZf4GN3oc",
        "duration": 155
    },
    {
        "courseid": 37,
        "order": 3,
        "title": "Polyalphabetic cipher",
        "url": "https://www.youtube.com/watch?v=BgFJD7oCmDE",
        "duration": 146
    },
    {
        "courseid": 37,
        "order": 4,
        "title": "The one-time pad",
        "url": "https://www.youtube.com/watch?v=FlIG3TvQCBQ",
        "duration": 175
    },
    {
        "courseid": 38,
        "order": 1,
        "title": "The fundamental theorem of arithmetic",
        "url": "https://www.youtube.com/watch?v=8CluknrLeys",
        "duration": 231
    },
    {
        "courseid": 38,
        "order": 2,
        "title": "Public key cryptography: What is it?",
        "url": "https://www.youtube.com/watch?v=MsqqpO9R5Hc",
        "duration": 271
    },
    {
        "courseid": 38,
        "order": 3,
        "title": "The discrete logarithm problem",
        "url": "https://www.youtube.com/watch?v=SL7J8hPKEWY",
        "duration": 115
    },
    {
        "courseid": 38,
        "order": 4,
        "title": "Diffie-hellman key exchange",
        "url": "https://www.youtube.com/watch?v=M-0qt6tdHzk",
        "duration": 138
    },
    {
        "courseid": 39,
        "order": 1,
        "title": "Randomized algorithms (intro)",
        "url": "https://www.youtube.com/watch?v=WGMn16TDTjE",
        "duration": 562
    },
    {
        "courseid": 39,
        "order": 2,
        "title": "Conditional probability explained visually",
        "url": "https://www.youtube.com/watch?v=KqCKZwh5WY8",
        "duration": 305
    },
    {
        "courseid": 39,
        "order": 3,
        "title": "Random primality test (warm up)",
        "url": "https://www.youtube.com/watch?v=1mjyq51ppT8",
        "duration": 305
    },
    {
        "courseid": 39,
        "order": 4,
        "title": "Fermat's little theorem",
        "url": "https://www.youtube.com/watch?v=OoQ16YCYksw",
        "duration": 365
    },
    {
        "courseid": 39,
        "order": 5,
        "title": "Fermat primality test",
        "url": "https://www.youtube.com/watch?v=xMj3jzFDZ38",
        "duration": 427
    },
    {
        "courseid": 40,
        "order": 1,
        "title": "What is information theory?",
        "url": "https://www.youtube.com/watch?v=d9alWZRzBWk",
        "duration": 205
    },
    {
        "courseid": 40,
        "order": 2,
        "title": "Origins of written language",
        "url": "https://www.youtube.com/watch?v=lkeXaqoXDYQ",
        "duration": 439
    },
    {
        "courseid": 40,
        "order": 3,
        "title": "History of the alphabet",
        "url": "https://www.youtube.com/watch?v=6NrTrBzC6dk",
        "duration": 562
    },
    {
        "courseid": 40,
        "order": 4,
        "title": "The Rosetta Stone",
        "url": "https://www.youtube.com/watch?v=OFXY9-pec1I",
        "duration": 235
    },
    {
        "courseid": 41,
        "order": 1,
        "title": "Symbol rate",
        "url": "https://www.youtube.com/watch?v=nuUkcbAId6o",
        "duration": 284
    },
    {
        "courseid": 41,
        "order": 2,
        "title": "Introduction to channel capacity",
        "url": "https://www.youtube.com/watch?v=W-OskAegz5o",
        "duration": 352
    },
    {
        "courseid": 41,
        "order": 3,
        "title": "Measuring information",
        "url": "https://www.youtube.com/watch?v=PtmzfpV6CDE",
        "duration": 592
    },
    {
        "courseid": 41,
        "order": 4,
        "title": "Origin of Markov chains",
        "url": "https://www.youtube.com/watch?v=Ws63I3F7Moc",
        "duration": 434
    },
    {
        "courseid": 42,
        "order": 1,
        "title": "Introducing How Computers Work",
        "url": "https://www.youtube.com/watch?v=_bVqU4D_MVw",
        "duration": 80
    },
    {
        "courseid": 42,
        "order": 2,
        "title": "What Makes a Computer, a Computer?",
        "url": "https://www.youtube.com/watch?v=xfKn5OjHLqQ",
        "duration": 309
    },
    {
        "courseid": 42,
        "order": 3,
        "title": "Binary & Data",
        "url": "https://www.youtube.com/watch?v=ewokFOSxabs",
        "duration": 358
    },
    {
        "courseid": 42,
        "order": 4,
        "title": "Circuits & Logic",
        "url": "https://www.youtube.com/watch?v=Sc3lh3D4rCw",
        "duration": 284
    },
    {
        "courseid": 43,
        "order": 1,
        "title": "Wires, cables, and WiFi",
        "url": "https://www.youtube.com/watch?v=iV-YqG70wbQ",
        "duration": 400
    },
    {
        "courseid": 43,
        "order": 2,
        "title": "IP addresses and DNS",
        "url": "https://www.youtube.com/watch?v=MwxMsaFFycg",
        "duration": 404
    },
    {
        "courseid": 43,
        "order": 3,
        "title": "Packet, routers, and reliability",
        "url": "https://www.youtube.com/watch?v=aD_yi5VjF78",
        "duration": 385
    },
    {
        "courseid": 43,
        "order": 4,
        "title": "HTTP and HTML",
        "url": "https://www.youtube.com/watch?v=1K64fWX5z4U",
        "duration": 426
    },
    {
        "courseid": 44,
        "order": 1,
        "title": "Why look at art?",
        "url": "https://www.youtube.com/watch?v=0OloYD_kSbU",
        "duration": 115
    },
    {
        "courseid": 44,
        "order": 2,
        "title": "The five major world religions",
        "url": "https://www.youtube.com/watch?v=m6dCxo7t_aE",
        "duration": 669
    },
    {
        "courseid": 44,
        "order": 3,
        "title": "A brief history of religion in art",
        "url": "https://www.youtube.com/watch?v=qfITRYcnP84",
        "duration": 277
    },
    {
        "courseid": 44,
        "order": 4,
        "title": "Is there a difference between art and craft?",
        "url": "https://www.youtube.com/watch?v=tVdw60eCnJI",
        "duration": 330
    },
    {
        "courseid": 45,
        "order": 1,
        "title": "How to do visual (formal) analysis in art history",
        "url": "https://www.youtube.com/watch?v=sM2MOyonDsY",
        "duration": 592
    },
    {
        "courseid": 45,
        "order": 2,
        "title": "Art historical analysis (painting), a basic introduction using Goya's Third of May, 1808",
        "url": "https://www.youtube.com/watch?v=_QM-DfhrNv8",
        "duration": 639
    },
    {
        "courseid": 45,
        "order": 3,
        "title": "A brief history of representing the body in Western painting",
        "url": "https://www.youtube.com/watch?v=0WxPx3_ZSBI",
        "duration": 501
    },
    {
        "courseid": 45,
        "order": 4,
        "title": "A brief history of representing of the body in Western sculpture",
        "url": "https://www.youtube.com/watch?v=4eNX_xFt-sU",
        "duration": 476
    },
    {
        "courseid": 46,
        "order": 1,
        "title": "Ancient Near Eastern and ancient Egyptian art",
        "url": "https://www.youtube.com/watch?v=A_8yPgC9zQc",
        "duration": 377
    },
    {
        "courseid": 46,
        "order": 2,
        "title": "Ancient Greek and Roman art",
        "url": "https://www.youtube.com/watch?v=XdXXK_PTkUU",
        "duration": 436
    },
    {
        "courseid": 46,
        "order": 3,
        "title": "Medieval and Byzantine art",
        "url": "https://www.youtube.com/watch?v=UpGsouOnxOU",
        "duration": 307
    },
    {
        "courseid": 46,
        "order": 4,
        "title": "Renaissance art",
        "url": "https://www.youtube.com/watch?v=kzhuZmzoX5o",
        "duration": 625
    },
    {
        "courseid": 47,
        "order": 1,
        "title": "Introduction to chemistry",
        "url": "https://www.youtube.com/watch?v=Rd4a1X3B61w",
        "duration": 465
    },
    {
        "courseid": 47,
        "order": 2,
        "title": "Elements and atoms",
        "url": "https://www.youtube.com/watch?v=IFKnq9QM6_A",
        "duration": 788
    },
    {
        "courseid": 47,
        "order": 3,
        "title": "Atomic weight and atomic mass",
        "url": "https://www.youtube.com/watch?v=NG-rrorZcM8",
        "duration": 533
    },
    {
        "courseid": 47,
        "order": 4,
        "title": "Worked example: Atomic weight calculation",
        "url": "https://www.youtube.com/watch?v=EPvd-3712U8",
        "duration": 266
    },
    {
        "courseid": 48,
        "order": 1,
        "title": "Introduction to ions",
        "url": "https://www.youtube.com/watch?v=zTUnjPALX_U",
        "duration": 396
    },
    {
        "courseid": 48,
        "order": 2,
        "title": "Naming ions and ionic compounds",
        "url": "https://www.youtube.com/watch?v=ptAw20kem90",
        "duration": 237
    },
    {
        "courseid": 48,
        "order": 3,
        "title": "Empirical, molecular, and structural formulas",
        "url": "https://www.youtube.com/watch?v=bmjg7lq4m4o",
        "duration": 409
    },
    {
        "courseid": 48,
        "order": 4,
        "title": "Molecular mass and molecular weight",
        "url": "https://www.youtube.com/watch?v=_WXndBGQnyI",
        "duration": 441
    },
    {
        "courseid": 49,
        "order": 1,
        "title": "Naming ions and ionic compounds",
        "url": "https://www.youtube.com/watch?v=ptAw20kem90",
        "duration": 237
    },
    {
        "courseid": 49,
        "order": 2,
        "title": "Common polyatomic ions",
        "url": "https://www.youtube.com/watch?v=DpnUrVXSLaQ",
        "duration": 347
    },
    {
        "courseid": 49,
        "order": 3,
        "title": "Naming ionic compound with polyvalent ion",
        "url": "https://www.youtube.com/watch?v=vVTwzjvWySs",
        "duration": 242
    },
    {
        "courseid": 49,
        "order": 4,
        "title": "Finding formula for ionic compounds",
        "url": "https://www.youtube.com/watch?v=8_fMpRUsnBk",
        "duration": 178
    },
    {
        "courseid": 50,
        "order": 1,
        "title": "Chemical reactions introduction",
        "url": "https://www.youtube.com/watch?v=TStjgUmL1RQ",
        "duration": 552
    },
    {
        "courseid": 50,
        "order": 2,
        "title": "Balancing chemical equations",
        "url": "https://www.youtube.com/watch?v=TUuABq95BBM",
        "duration": 303
    },
    {
        "courseid": 50,
        "order": 3,
        "title": "Balancing more complex chemical equations",
        "url": "https://www.youtube.com/watch?v=xqpYeiefZl8",
        "duration": 276
    },
    {
        "courseid": 50,
        "order": 4,
        "title": "Visually understanding balancing chemical equations",
        "url": "https://www.youtube.com/watch?v=HbIdp5DURJA",
        "duration": 276
    },
    {
        "courseid": 51,
        "order": 1,
        "title": "Stoichiometry",
        "url": "https://www.youtube.com/watch?v=SjQG3rKSZUQ",
        "duration": 595
    },
    {
        "courseid": 51,
        "order": 2,
        "title": "Stoichiometry example problem 1",
        "url": "https://www.youtube.com/watch?v=jFv6k2OV7IU",
        "duration": 814
    },
    {
        "courseid": 51,
        "order": 3,
        "title": "Stoichiometry example problem 2",
        "url": "https://www.youtube.com/watch?v=eQf_EAYGo-k",
        "duration": 1132
    }
]

lessonsArray.each do |lesson|
  Lesson.create!(
      course_id: lesson[:courseid],
      title: lesson[:title],
      order_num: lesson[:order],
      content_url: lesson[:url],
      content_duration: lesson[:duration])
end


#RATINGS
#-----------------------------------------------------------------------
Course.all.each do |course|
  num_ratings = 45 + rand(46)
  num_ratings.times do
    rating = 3 + rand(3)
    Rating.create!(rating: rating, course_id: course.id)
  end

  # num_courses = course.id + 5
  # num_courses.times do |n|
  #   duration = 120 + rand(1800)
  #   Lesson.create!(
  #     course_id: course.id,
  #     title: "The only lesson there is. (Also, some extra text is here to test css wraps).",
  #     order_num: n + 1,
  #     content_url: "https://www.youtube.com/watch?v=U9t-slLl30E",
  #     content_duration: duration)
  # end
end
