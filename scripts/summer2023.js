$(document).ready(
    function () {
        $("#intro").click(
            function (e) {
                $("#i1").text("While pursuing my degree in Computer Science I have developed an interest in databases and database management. During my Summer 2023 term, I worked as a Data Management Assistant for Kenna where I got to explore my interest in databases and expand my knowledge on quality assurance (QA) and software testing. This position combined my interest in tech with love for the outdoors because the software I worked on was used to help those working in agriculture.");
                $("#i2").text("In this report, I will describe my employer and the organization, the position I worked in, what I was required to do, and I will finish off by going over my goals to outline what I accomplished in my first work term. ");
            }
        );
        $("#about").click(
            function (e) {
                $("#introText").text("");
                $("#a1").text("Kenna is a marketing solutions provider specializing in customer experience management. Founded in 1985 as AppliCan Marketing and rebranded as Kenna 2002. For over three decades Kenna has provided their clients data driven solutions and software with an emphasis on customer first thinking. ");
                $("#a2").text("Today Kenna works with BASF to create software for clients. For the past two decades Kenna has helped BASF build loyal customer relationships which have increased market success. This is done by gaining the trust of growers through their experience with the brand.");
                $("#a3").text("The current CEO of Kenna is Jeffery Bowles and Kenna’s team continues to grow alongside BASF to better provide them solutions.");

            }
        );

        $("#description").click(
            function (e) {
                $("#introText").text("");
                $("#d1").text("As a Data Management Assistant I worked for Data Solutions under the Data Management Team. My tasks differed from day to day but these were a few of my main responsibilities:");
                $("#d2").text("Through the work term I performed QA and software testing when needed. I worked on 5 applications to ensure 99% accuracy. I used SQL, Excel, and IBM Notes to help me with the QA process. I learned about the software development life cycle and how an application goes from development to testing/staging to production.");
                $("#d3").text("I was in charge of overseeing the process to set up employee profiles and territory updates. I managed Jira tickets coordinating responsibilities between developers and other Data Solutions team members. Then I performed overall QA on the whole process to make sure the employee/territory was set up correctly.");
                $("#d4").text("I helped create a database dictionary for employee training. I wrote SQL queries to access data related to data points and calculations for specific applications. This taught me more about the contents of the applications I had been working on. The database dictionary will be a helpful tool for future Kenna employees and I am glad that I got to make an impact to help the company.");
            }
        );
    }
); 