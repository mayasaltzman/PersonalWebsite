$(document).ready(
    function () {
        //showing intro text when intro button is clicked
        $("#intro").click(
            function (e) {
                $('#introText').show();
                $('#cft').show();
                $('#aboutText').hide();
                $('#descriptionText').hide();
                $('#goalsText').hide();
                $('#caText').hide();
                $('#aimg').hide();
                $('#dimg').hide();
                $('#caimg1').hide();
                $('#caimg2').hide();
                $('#gimg').hide();

            }
        );
        //showing about text when button is clicked
        $("#about").click(
            function (e) {
                $('#introText').hide();
                $('#aboutText').show();
                $('#descriptionText').hide();
                $('#goalsText').hide();
                $('#caText').hide();
                $('#cft').hide();
                $('#aimg').show();
                $('#dimg').hide();
                $('#caimg1').hide();
                $('#caimg2').hide();
                $('#gimg').hide();
                $("#h2a").text("About Employer");
                $("#a1").text("Kenna is a marketing solutions provider specializing in customer experience management. Founded in 1985 as AppliCan Marketing and rebranded as Kenna 2002. For over three decades Kenna has provided their clients data driven solutions and software with an emphasis on customer first thinking. ");
                $("#a2").text("Today Kenna works with BASF to create software for clients. For the past two decades Kenna has helped BASF build loyal customer relationships which have increased market success. This is done by gaining the trust of growers through their experience with the brand.");
                $("#a3").text("The current CEO of Kenna is Jeffery Bowles and Kenna’s team continues to grow alongside BASF to better provide them solutions.");

                //appending image
                var imageUrl = "summer2023imgs/Screenshot 2023-08-29 at 11.45.31 AM.png";
                var $image = $('<img>').attr('src', imageUrl).attr('alt', '').addClass('appended-image');
                $('#aimg').empty().append($image);

                // Resize the appended image
                $image.css({
                    'width': '500px',
                    'height': '400px',
                    'padding-top': '150px'
                });
            }
        );
        //showing description text when button is clicked
        $("#description").click(
            function (e) {
                $('#introText').hide();
                $('#aboutText').hide();
                $('#descriptionText').show();
                $('#goalsText').hide();
                $('#caText').hide();
                $('#aimg').hide();
                $('#cft').hide();
                $('#dimg').show();
                $('#caimg1').hide();
                $('#caimg2').hide();
                $('#gimg').hide();
                $("#h2d").text("Job Description");
                $("#d1").text("As a Data Management Assistant I worked for Data Solutions under the Data Management Team. My tasks differed from day to day but these were a few of my main responsibilities:");
                $("#d2").text("Through the work term I performed QA and software testing when needed. I worked on 5 applications to ensure 99% accuracy. I used SQL, Excel, and IBM Notes to help me with the QA process. I learned about the software development life cycle and how an application goes from development to testing/staging to production.");
                $("#d3").text("I was in charge of overseeing the process to set up employee profiles and territory updates. I managed Jira tickets coordinating responsibilities between developers and other Data Solutions team members. Then I performed overall QA on the whole process to make sure the employee/territory was set up correctly.");
                $("#d4").text("I helped create a database dictionary for employee training. I wrote SQL queries to access data related to data points and calculations for specific applications. This taught me more about the contents of the applications I had been working on. The database dictionary will be a helpful tool for future Kenna employees and I am glad that I got to make an impact to help the company.");

                //appending image
                var imageUrl = "summer2023imgs/Quality-Assurance-vs-Quality-Control.png";
                var $image = $('<img>').attr('src', imageUrl).attr('alt', '').addClass('appended-image');
                $('#dimg').empty().append($image);

                // Resize the appended image
                $image.css({
                    'width': '500px',
                    'height': '400px',
                    'padding-top': '200px'
                });

            }

        );
        //showing goals text when button is clicked
        $("#goals").click(
            function (e) {
                $('#introText').hide();
                $('#aboutText').hide();
                $('#descriptionText').hide();
                $('#goalsText').show();
                $('#caText').hide();
                $('#aimg').hide();
                $('#cft').hide();
                $('#dimg').hide();
                $('#caimg1').hide();
                $('#caimg2').hide();
                $('#gimg').show();
                $("#h2g").text("Goals");
                $("#g1").text("1) Improve my written communication skills so that I can converse effectively in a professional manner.")
                $("#g2").text("One thing I was nervous about going into my work term was my ability to communicate professionally. 	Not only did my written communication skills improve but my confidence in my ability to communicate has increased tremendously. I don't second guess myself when sending emails or Teams messages and I feel comfortable reaching out. I notice this confidence that I have learned continuing in my life outside of work. When sending emails related to school or extracurriculars I can do so with ease, and I have lost all the nervousness surrounding written communication that I had in the past. My supervisor even noted that one of my skills is my ability to communicate. This assured me that I was successful in achieving my goal.")
                $("#g3").text("2) Improve my Excel skills.")
                $("#g4").text("While I had worked with Excel in the past and felt pretty confident in my Excel skills going into the work term, I had never used Excel in the way I had to while doing this job. At first I was struggling with advanced Excel techniques. However, Excel was a tool I had to use almost daily and because of that my Excel skills did improve. The strengthening of these skills allowed me to complete work more efficiently and in a timelier manner. I clearly saw my skills improve in my ability to do data matches over large datasets. The first time I had to do a task like this I struggled to complete it. But I reached out for help and was supported by one of my colleagues. Now I can perform data matches with ease. While sometimes I still must look up certain formulas, I think that is natural. I continue to improve my Excel skills each day.")
                $("#g5").text("3) Improve my quantitative literacy to improve my QA skills")
                $("#g6").text("As I began my work term doing QA was the part of my job I was most excited for. Performing QA allowed me to look at the testing aspect of the software development life cycle. The improvement of my Excel skills helped improve my quantitative literacy. Being proficient in Excel helped with my QA methods and my understanding of data points. Additionally, each day I did a sweep of certain tools to determine if there were any bugs. This involved comparing data points. I was able to spot bugs so fixes could be implemented to the software. My ability to spot these bugs assured me that I did indeed improve when it comes to quantitative literacy. I still do ask a lot of questions regarding data sets but with each question I continue to learn.")

                //appending image
                var imageUrl = "summer2023imgs/shutterstock_318915104_360067.jpg";
                var $image = $('<img>').attr('src', imageUrl).attr('alt', '').addClass('appended-image');
                $('#gimg').empty().append($image);

                // Resize the appended image
                $image.css({
                    'width': '500px',
                    'height': '400px',
                    'padding-top': '200px'
                });
            }




        );

        //showing conclusion and acknowledgements text when button is clicked
        $("#ca").click(
            function (e) {
                $('#introText').hide();
                $('#aboutText').hide();
                $('#descriptionText').hide();
                $('#goalsText').hide();
                $('#caText').show();
                $('#aimg').hide();
                $('#cft').hide();
                $('#dimg').hide();
                $('#caimg1').show();
                $('#caimg2').show();
                $('#gimg').hide();
                $("#h2ca").text("Conclusion + Acknowledgments");
                $("#ca1").text("I would like to thank my supervisor Daniel Kostevskii for supporting me throughout the work term. As well as everyone on the Data Management team for being so open and welcoming. All my team members were always there to provide me support and answer any questions. I would like to thank Kenna for fostering such a positive work environment. That wouldn’t be the same without all the amazing people that work there. One of the best things about working at Kenna was the company culture and I would like to thank all the people that planned in person social events despite the remote work environment. ")
                $("#ca2").text("Working at Kenna was an amazing experience. I was able to learn a lot about the software development process and view software in a different light. I truly understand the importance of the user's experience thanks to all the QA and software testing I have done. I made so many amazing connections and I look forward to returning to Kenna for my next work term in the Fall!")

                //appending image1
                var imageUrl1 = "summer2023imgs/IMG_0364.jpg";
                var $image1 = $('<img>').attr('src', imageUrl1).attr('alt', '').addClass('appended-image');
                $('#caimg1').empty().append($image1);

                // Resize the appended image
                $image1.css({
                    'width': '350px',
                    'height': '300px',
                    'padding-top': '50px'
                });

                //appending image2
                var imageUrl2 = "summer2023imgs/MicrosoftTeams-image (1).png";
                var $image2 = $('<img>').attr('src', imageUrl2).attr('alt', '').addClass('appended-image');
                $('#caimg2').empty().append($image2);

                // Resize the appended image
                $image2.css({
                    'width': '350px',
                    'height': '300px',
                    'padding-top': '10px'
                });
            }
        );
    }
); 