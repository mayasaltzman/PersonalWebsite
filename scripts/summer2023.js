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

        $("#goals").click(
            function (e) {
                $("#introText").text("");
                $("#g1").text("1) Improve my written communication skills so that I can converse effectively in a professional manner.")
                $("#g2").text("One thing I was nervous about going into my work term was my ability to communicate professionally. 	Not only did my written communication skills improve but my confidence in my ability to communicate has increased tremendously. I don't second guess myself when sending emails or Teams messages and I feel comfortable reaching out. I notice this confidence that I have learned continuing in my life outside of work. When sending emails related to school or extracurriculars I can do so with ease, and I have lost all the nervousness surrounding written communication that I had in the past. My supervisor even noted that one of my skills is my ability to communicate. This assured me that I was successful in achieving my goal.")
                $("#g3").text("2) Improve my Excel skills.")
                $("#g4").text("While I had worked with Excel in the past and felt pretty confident in my Excel skills going into the work term, I had never used Excel in the way I had to while doing this job. At first I was struggling with advanced Excel techniques. However, Excel was a tool I had to use almost daily and because of that my Excel skills did improve. The strengthening of these skills allowed me to complete work more efficiently and in a timelier manner. I clearly saw my skills improve in my ability to do data matches over large datasets. The first time I had to do a task like this I struggled to complete it. But I reached out for help and was supported by one of my colleagues. Now I can perform data matches with ease. While sometimes I still must look up certain formulas, I think that is natural. I continue to improve my Excel skills each day.")
                $("#g5").text("3) Improve my quantitative literacy to improve my QA skills")
                $("#g6").text("As I began my work term doing QA was the part of my job I was most excited for. Performing QA allowed me to look at the testing aspect of the software development life cycle. The improvement of my Excel skills helped improve my quantitative literacy. Being proficient in Excel helped with my QA methods and my understanding of data points. Additionally, each day I did a sweep of certain tools to determine if there were any bugs. This involved comparing data points. I was able to spot bugs so fixes could be implemented to the software. My ability to spot these bugs assured me that I did indeed improve when it comes to quantitative literacy. I still do ask a lot of questions regarding data sets but with each question I continue to learn.")
            }
        );
    }
); 