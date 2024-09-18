## A Fresh LANDING 
This is designed to be a CSS trial and error project. It is being built in order to incorporate a lot of nifty CSS techniques with custom menu sliders and a raw modal designed without a library or framework. Primary goal is to develop an deeping understanding of css and provide a template to tinker to learn more. This project was completed with coaching and guidance. While their are parts I do claim as original and a lot has been redone to fit my experiments, the underlying principles cannot be completely claimed by myself. 

## Project Overview
This project leverages Vanilla JS, standard HTMl, raw CSS, FontAwesome (for icons), and FontSource (https://fontsource.org/) font API in order to achieved the various effects throughout this fundamental landing page. 

## Features
  - In the Nav bar (upper left hamburger icon) we use CSS characteristics transform: translate in order to allow it to be displayed on demand. 
    - Within the nav bar we show a little bit of very basic layering (done with in-line styling). In-line has begun to make an appearance again due to tailwind and for purposes of making small changes to very specific html elements. 
  
  - For the buttons we use id and id:hover to create different effects based on the cursor moving over the icon. Neat little feature that makes the press a tiny bit more dynamic (also resized buttons when pressed)

  - Two different modals designed for this page. Sign-up modal has a fade effect and allows for click off hiding. This latter features uses the keyframes utility. 
    - Second modal is a dialogue box using which dynamically shows the dialogue over other elements when called upon. It is a fundamental and powerful element in JS for different situations, especially selection forms and the like, similar to the one here. 
  
  - There are other features involved. and a brief look at the could provides explanations as needed. 


## Getting Started

### Prerequisites

To run this project locally, I recommend using the **Live Server** extension in VSCode. It’s a straightforward and enjoyable way to serve your project.

- **Live Server Extension**: [ritwickdey.LiveServer](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

### Instructions

1. **Install Live Server**: If you haven't installed the Live Server extension, you can do so from the VSCode marketplace.
2. **Open the Project**: Open the `index.html` file in your VSCode.
3. **Start the Server**:
   - Right-click on the `index.html` file and select **Open with Live Server**.
   - Alternatively, click on the **Go Live** button in the bottom right corner of VSCode.
4. **Access the Application**: Your browser should automatically open with a local server running on port `5500`.

If you prefer using another local server like MAMP, feel free to do so.

## Click Around
  - Though more features will be added in the near future, have a quick look at the code and a click around to see the little things. 

## Customization
  - Need a quick template or want to swipe some CSS, please feel free. Happy to share this small development with those in need. 

## License
  We will call this an opened license. Use this project as desired. 

## Planned additions:
  - I plan to add animations to the dialogue modal and closing animations as well. Still need to get the key frame aspect down. 
  - I will add an updateable DOM element in order to get allow deciding a favorite animal to mean a bit more (maybe attach a display picture to the profile as well).
    - This may involve a 3rd Party API
  - CSS Cube for fun, this is hard and while I promise to write it myself, can't guarantee I won't need to find a guide.