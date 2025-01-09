var page_counter = 0;



// Function to fetch and render a Markdown file
async function loadMarkdown(filePath, elementId) {
    try {
      const response = await fetch(filePath);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const text = await response.text();
      document.getElementById(elementId).innerHTML = marked.parse(text);
    } catch (error) {
      console.error(`Error loading ${filePath}:`, error);
      document.getElementById(elementId).innerHTML = "<p>Sorry, the content couldn't be loaded.</p>";
    }
  }

// Handle Start Carousel Button Click
// function initializeStartCarouselButton() {
//     const startButton = document.getElementById('start-carousel-button');
//     const landingTextContainer = document.getElementById('landing-text-container');
//     // const carouselSection = document.querySelector('.carousel-section');
//     const carouselImage = document.querySelector('#case-study-1-image-container')
//     const carouselText = document.querySelector('#case-study-1-text-container')

  
//     if (startButton) {
//       startButton.addEventListener('click', () => {
//         // Fade out Landing Text
//         landingTextContainer.classList.add('fade-out');
  
//         // Fade in Carousel Section after fade-out completes
//         setTimeout(() => {
//             carouselImage.classList.add('fade-in');
//             carouselText.classList.add('fade-in');
//             carouselImage.classList.remove('hidden');
//             carouselText.classList.remove('hidden');
//         }, 500); // Duration matches the CSS transition time
  
//         // Optionally, hide the start button
//         startButton.style.display = 'none';

//         page_counter += 1;
//         console.log("page counter: ", page_counter)
//       });
//     }
//   }

  // handle next clicks
function initializeNextButton() {
  const nextButton = document.getElementById('next-button');
  
  if (nextButton) { 
    nextButton.addEventListener('click', () => {
      const landingTextContainer = document.getElementById('landing-text-container');
      const current_carouselImage = document.querySelector(`#case-study-${page_counter}-image-container`);
      const current_carouselText = document.querySelector(`#case-study-${page_counter}-text-container`);
      const next_carouselImage = document.querySelector(`#case-study-${page_counter+1}-image-container`);
      const next_carouselText = document.querySelector(`#case-study-${page_counter+1}-text-container`);
      
      
      setTimeout(() => {
        if (page_counter != 0) {
          if (page_counter != 15) {
            current_carouselImage.classList.remove('fade-in');
            current_carouselText.classList.remove('fade-in');
            current_carouselImage.classList.add('fade-out');
            current_carouselText.classList.add('fade-out');
            next_carouselImage.classList.add('fade-in');
            next_carouselText.classList.add('fade-in');
            next_carouselImage.classList.remove('hidden');
            next_carouselText.classList.remove('hidden');
            next_carouselImage.classList.remove('fade-out');
            next_carouselText.classList.remove('fade-out');
            page_counter += 1;
          } else {
            current_carouselImage.classList.remove('fade-in');
            current_carouselText.classList.remove('fade-in');
            current_carouselImage.classList.add('fade-out');
            current_carouselText.classList.add('fade-out');
            landingTextContainer.classList.add('fade-in');
            landingTextContainer.classList.remove('hidden');
            landingTextContainer.classList.remove('fade-out');
            page_counter = 0;
          }
        } else {
          landingTextContainer.classList.add('fade-out');
          landingTextContainer.classList.remove('fade-in');
          landingTextContainer.classList.add('hidden');
          next_carouselImage.classList.add('fade-in');
          next_carouselText.classList.add('fade-in');
          next_carouselImage.classList.remove('hidden');
          next_carouselText.classList.remove('hidden');
          next_carouselImage.classList.remove('fade-out');
          next_carouselText.classList.remove('fade-out');
          page_counter += 1;
        }
        
        console.log("page counter: ", page_counter)
      }, 1);
    })
  }
}
  // handle previous clicks

  function initializePrevButton() {
    const prevButton = document.getElementById('previous-button');
    
    if (prevButton) {
      prevButton.addEventListener('click', () => {
        const landingTextContainer = document.getElementById('landing-text-container');
        const current_carouselImage = document.querySelector(`#case-study-${page_counter}-image-container`);
        const current_carouselText = document.querySelector(`#case-study-${page_counter}-text-container`);
        const prev_carouselImage = document.querySelector(`#case-study-${page_counter-1}-image-container`);
        const prev_carouselText = document.querySelector(`#case-study-${page_counter-1}-text-container`);
        const _15_carouselImage = document.querySelector(`#case-study-15-image-container`);
        const _15_carouselText = document.querySelector(`#case-study-15-text-container`);
        
        
        setTimeout(() => {
          if (page_counter != 0) {
            if (page_counter != 1) {
              current_carouselImage.classList.remove('fade-in');
              current_carouselText.classList.remove('fade-in');
              current_carouselImage.classList.add('fade-out');
              current_carouselText.classList.add('fade-out');
              prev_carouselImage.classList.add('fade-in');
              prev_carouselText.classList.add('fade-in');
              prev_carouselImage.classList.remove('hidden');
              prev_carouselText.classList.remove('hidden');
              prev_carouselImage.classList.remove('fade-out');
              prev_carouselText.classList.remove('fade-out');
              page_counter -= 1;
            } else {
              current_carouselImage.classList.remove('fade-in');
              current_carouselText.classList.remove('fade-in');
              current_carouselImage.classList.add('fade-out');
              current_carouselText.classList.add('fade-out');
              landingTextContainer.classList.add('fade-in');
              landingTextContainer.classList.remove('hidden');
              landingTextContainer.classList.remove('fade-out');
              page_counter = 0;
            }
          } else {
            landingTextContainer.classList.add('fade-out');
            landingTextContainer.classList.remove('fade-in');
            landingTextContainer.classList.add('hidden');
            _15_carouselImage.classList.add('fade-in');
            _15_carouselText.classList.add('fade-in');
            _15_carouselImage.classList.remove('hidden');
            _15_carouselText.classList.remove('hidden');
            _15_carouselImage.classList.remove('fade-out');
            _15_carouselText.classList.remove('fade-out');
            page_counter = 15;
          }
          
          console.log("page counter: ", page_counter)
        }, 1);
      })
    }
  }
    
  function initializeScrollListeners() {
    const scrollableTexts = document.querySelectorAll('.scrollable-text');
    
    scrollableTexts.forEach((scrollableText) => {
      const parentContainer = scrollableText.parentElement; // .scrollable-container
            
      scrollableText.addEventListener('scroll', () => {
        const { scrollTop, scrollHeight, clientHeight } = scrollableText;
        
        if (scrollTop + clientHeight >= scrollHeight - 5) { // Buffer of 5px
          parentContainer.classList.add('at-bottom');
        } else {
          parentContainer.classList.remove('at-bottom');
        }
      });
      
      // Initialize the state on page load
      scrollableText.dispatchEvent(new Event('scroll'));
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    const scrollableTexts = document.querySelectorAll('.scrollable-text');
  
    scrollableTexts.forEach((scrollableText) => {
      const markdownFile = `writeups/${scrollableText.getAttribute('data-markdown')}`;
      loadMarkdown(markdownFile, scrollableText.id);
    });
  
    initializeScrollListeners();
    // initializeStartCarouselButton();
    initializeNextButton();
    initializePrevButton();
  });