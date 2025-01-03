import React from 'react';
import './Reviews.css';

function Reviews() {
    const reviews = [
        {
            name: "Angie Wellman",
            rating: 5,
            text: "Mack did my husband's tattoo sleeve. He did a phenomenal job.  The whole vibe and environment was positive. It was like visiting  a good friends house. Mack worked into the wee hours of the morning for 2 days to get this done for my husband as we came in from slc. Would absolutely recommend this business to anyone who needs a tattoo  or piercing. And the tattoo came out looking better then we could  have ever hoped for.",
        },
        {
            name: "Loren Jenna",
            rating: 5,
            text: "I’ve been going to Precious since she was an apprentice and I've gotten 19 tattoos and a nose piercing from her which I love so much! My piercing and all my tattoos have healed very nicely and don't really need any touching up. She does such a great job and makes sure you're comfortable and happy with your placement. Her station is so cute and always so clean! She always has a positive attitude and makes the hours go by so fast! My dad has gotten a tattoo by Mack a couple years ago, which healed very nicely and the experience was great! Everyone at the shop is so friendly and very helpful when I've asked for their opinion on designs and placement. I can't recommend Mack's Tattoo Shop enough!",
        },
        {
            name: "James Gilbert",
            rating: 5,
            text: "I am so happy with my ink. It's my first tattoo. Starr was my tattoo artist and she did an amazing job. We designed my sleeve together and she had some fantastic ideas on how to make it really pop. The vibe around the shop is very cool. It's like being with a family.  Mack is an amazing artist as well of course. It was fun to watch him do work in between sessions. They both do very realistic, tattoos. If you're looking to get ink, I highly recommend going to Macks tattoo shop.",
        },
        {
            name: "Sydnee Turnbaugh",
            rating: 5,
            text: "I have gotten all of my tattoos at Macks Tattoo shop and I am so happy with the outcome every time! My artist there is Precious Torres. Every tattoo she has done for me has healed nicely with no loss of color or bleeding. She is the very best at fine lines and has a light touch of hand so it makes the tattooing process go by so much smoother and easier. Her station is very organized and clean, and she always has the best attitude and personality. Her art is not one to miss. She also does permanent makeup as well. The owner and artist Mack, is a very personable guy and very talented. His business has a cool yet very sophisticated environment that is always clean and welcoming. Everyone there at Macks Tattoo Shop is amazing. 10/10 would recommend for tattoos, piercings, and permanent makeup by Precious.",
        },
        {
            name : "RAIN",
            rating: 5,
            text: "I am thrilled I finally committed to a tattoo shop and it being Mack's. I should've have ventured to his shop fourteen years ago when I first moved back but dared not to. This is the second tattoo I have received there and I love them both. The first tattoo was Mack and thought the shop was a bit chaotic, he made sure I was extremely comfortable to the point I nodded off. It has healed beautifully and I wear my ink with pride. The second tattoo appointment was with precious and I had a few done within our time together. She is very respectful, kind, and courteous. You can tell she loves what she does, not to mention she has a great hand; gentle to the point of hardly feeling any pain. It's a comfortable atmosphere, jokes and conversations galore. Even before. I will continue to support this shop and hope to establish a welcomed repore with them; always recommending."
        },
        {
            name : "Jonathan Romandia",
            rating: 5,
            text: "Awesome artists, Mack's work is true art, unfortunately I didn't get that but I got the next best thing. I got ink from three of team and all there work was awesome. They will treat you like family, big shout out to the whole studio for being awesome. Highly recommend professional service at a reasonable rate for the awesome quality you will receive"
        },
        {
            name : "Rachael Richardson",
            rating: 5,
            text: "My husband and I recently drove three hours to get tattoos done by Kyle and Starr. I highly recommend Mack's Tattoo Shop. They were very clean, professional and competitively priced."
        },
        {
            name : "Camila Gonzalez",
            rating: 5,
            text: "I came all the way from Tennessee to get a tattoo from this shop. My artist was Precious, she was super friendly and talkative. She kept asking if the tattoo placement was okay and made sure I was happy with it before starting. She made sure I was always comfortable and didn't mind me having bathroom breaks, because I don't do well with tattoos. I was totally satisfied with my visit and will for sure come again. 100% recommend!!"
        },
        {
            name : "synara kathriner",
            rating: 5,
            text: "Precious did my tatooes so well, I love being in the shop with her. She’s so kinda and patience I love the vibe of her. \n Requested style: She is very open with new ideas \n Cleanliness: She's very precise with the cleanliness"
        },
        {
            name : "Adam",
            rating: 5,
            text: "Great shop, super friendly and accommodating. Able to get 3 of us in real quick for something to remember a family member by. Highly recommend."
        },
        {
            name : "Mae",
            rating: 5,
            text: "Mack and his artists are amazing at what they do. Have had multiple tattoos done there and have always walked out happy with the end result!"
        },
        {
            name : "Hanna Muzquiz",
            rating: 5,
            text: "Seriously loved getting my piercing done here! I came in to get my septum pierced and Amanda was so kind and helpful because she checked my nose anatomy first and when we realized the placement of the piercing, she was honest with me and we deduced that it wouldn't work with my nose structure. She said that studs on my nostrils would be cute so we went with that, and they are my favorite!! It was a really professional environment and Amanda was so friendly and welcoming. If you are thinking about a piercing, I completely recommend and encourage this shop!!"
        },
        {
            name : "Renee Koth",
            rating: 5,
            text: "Some friends and I were in town for a reunion, and per tradition, we get another piercing each time that we're together. Of 5+ shops that we called, this was the only shop that was willing to do our piercings together. We even came in an hour before closing and they were so accommodating. Amanda was friendly, professional, clean, and made us feel so comfortable here. Definitely recommend!"
        },
        {
            name : "Tobias Marie (Freedomshocked)",
            rating: 5,
            text: "I've gone to Mack's twice now in the last few years, and they've taken great care of me both times! I had both daith ear piercings done (the ones for headaches) and a super cute nose piercing. Everyone was super friendly, professional. The place is clean and well lit. Well organized, and things are run smoothly! Super impressed with this little shop and will most definitely return here for more services in the future! Thanks guys!"
        },
        {
            name : "Christopher Durand",
            rating: 5,
            text: "Mack took care of me and my wife. This man put so much time and love in his tattoos that it set a whole new standard! Mack and his crew are amazing people. This shop won Best of Southern Utah for a reason!!!! Once you go Mack you Never Go Back!"
        },
        {
            name : "",
            rating: 5,
            text: ""
        }
    ];

    return (
        <div className="main">
            <div className="reviews-container">
                <div className="reviews-hero-banner">
                    <h1>Customer Reviews</h1>
                    <p>See what our happy customers have to say about Mack's Tattoos!</p>
                    <p>If you would like to see more reviews, visit our Yelp page.</p>
                </div>

                <div className="reviews-content">
                    {reviews.map((review, index) => (
                        <div className="review-card" key={index}>
                            <div className="review-header">
                                <h3>{review.name}</h3>
                                <div className="stars">
                                    {Array(review.rating).fill("⭐")}
                                </div>
                            </div>
                            <p className="review-text">{review.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Reviews;
