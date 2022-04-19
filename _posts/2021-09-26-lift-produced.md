---
layout: post
title: "How lift is really produced"
category: essays
---

Find my gentle introuduction to lift here:

[![Lift - A Gentle Introduction](https://res.cloudinary.com/marcomontalbano/image/upload/v1632792409/video_to_markdown/images/youtube--PyyHCEmg1wA-c05b58ac6eb4c4700831b2b3070cd403.jpg)](https://www.youtube.com/watch?v=PyyHCEmg1wA "Lift - A Gentle Introduction")

## Transcript

*Intro*

The moment you step into your car, you assume that the manufacturer has a complete understanding of how the clutch, engine and brakes work and rightly so. No one will feel comfortable riding a tin box travelling at 80 km/h on the freeway without a guarantee that everything is working as it should.
Can this assumption be extended to planes as well? Despite being around since the dawn of the 20th century, how planes fly has always been shrouded in mystery. In fact NASA had to publish what lift is *not* to clear any misunderstanding of the topic. So once again I ask the question - how is lift produced?
A quick search yields two key principles in aerodynamics - Newton’s Third Law and Bernoulli’s Equation.

*Key principles in aerodynamics*

The explanation of Newton’s 3rd Law is pretty much straightforward - for every action there is an equal and opposite reaction. Likewise, consider the shape of a wing like this and notice how the air is being deflected downwards. This implies that there is some force causing the air to be pushed downwards, and consequently there would also be a force lifting the wing up.

This fundamental law of motion is however, only a piece of the puzzle. Look at how in this diagram there is a lower pressure region above the wing and a higher pressure region above it. To understand why there is such a pressure gradient we turn to Bernoulli's equation.

Imagine two rows of students with a meter’s worth of gap between them. Try walking between them and try to push as many of them away as hard as you can. The extent to which she pushes these students away is known as pressure. Now attempt to do the same thing, but run this time. Notice how he can’t push as many people away now? That’s why pressure drops as speed increases.

*Complicated stuffs*

Yet Newton and Bernoulli together still fail to fully explain the concept of lift, and this is where things get complicated, very complicated. The first two principles explain how in lift momentum and energy is conserved, but not mass. The consideration of all three factors results in this (flash Navier-Stokes) if you want to be really realistic.

Yes, no one has analytically solved the equation that I briefly showed you, at least for certain cases that the air flow is turbulent. Computational fluid dynamics simulations only use approximations of this equation in these cases. Although you can simplify it into this (shows the Euler equations) which is much cleaner, it does not consider the viscosity of air still. 

*Kutta-Zhukovsky Theorem*

Well, it seems like a dead end using this approach. We then turn to an alternative promising theory - the Kutta-Zhukovsky Theorem. Does this theory hold?

Consider two types of airflow. One that goes past the wing as shown here and one that simply travels in a circuit around the airfoil. This circulation in the latter is due to this swirl of air known as the starting vortex.

Combining the two types of flow together, we get air flowing above the wing moving faster than the air beneath it. Using the Bernoulli equation as before, we should be able to calculate the amount of lift, right?
There are, however, a few assumptions made in this theory. The airflow is assumed to have zero viscosity and the airfoil must be very sharp so the airflow on top and below meet smoothly at the trailing edge (here).

*Revelation that lift isn’t still 100% known*

So going back to the question that I asked at the start - how is lift produced? In short, the answer is we won’t know for sure. Even with ever improving computational power, the Navier-Stokes equations are unsolved and will remain so for the foreseeable future.

This is the unfortunate reality of aerodynamics; we can approximate but not evaluate. The silver lining, however, is that the challenge of finding the exact source of lift has seeded countless theories over the past few decades, spawning greater interest and research in the field.

Don’t worry, though the results churned out by aerodynamicists aren’t 100% accurate, plane flights continue to top the list of methods of transport by safety. Remember, driving to the airport is still much more dangerous than flying in a passenger jetliner.
Thank you.

*Incorrect theories

As I mentioned before, considering only one of the variables to consider will result in an incomplete or even completely wrong theory of lift. 

A famous misinterpretation of the Bernoulli equation is the equal transit theory. At its essence it implies that if there was a boyfriend and girlfriend air particle, and since the top of the wing is longer than that below, the boyfriend has to move faster to meet his girlfriend at the end, which this diagram completely disproves!

Another common blunder is when one only considers the fact that since the underside of the wing does all the flow deflection. If that were the case, I could have the top of the wing look like an elephant and it won’t matter!

While the mistakes in these theories are indeed quite glaring and perhaps laughable, it must be noted that these have made it into many websites on the Internet and even some pilot manuals! 