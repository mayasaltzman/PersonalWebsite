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
                //$("#introText").text("");
                $("#a1").text("Kenna is a marketing solutions provider specializing in customer experience management. Founded in 1985 as AppliCan Marketing and rebranded as Kenna 2002. For over three decades Kenna has provided their clients data driven solutions and software with an emphasis on customer first thinking. ");
                $("#a2").text("Today Kenna works with BASF to create software for clients. For the past two decades Kenna has helped BASF build loyal customer relationships which have increased market success. This is done by gaining the trust of growers through their experience with the brand.");
                $("#a3").text("The current CEO of Kenna is Jeffery Bowles and Kenna’s team continues to grow alongside BASF to better provide them solutions.");

            }
        );
    }
); 