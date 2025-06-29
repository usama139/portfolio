// htmlcss progress circular bar 
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 90,
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);

// javasript progress circular bar 
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 75,
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
    javascriptStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

// php progress circular bar 
let phpProgress = document.querySelector(".php"),
  phpValue = document.querySelector(".php-progress");

let phpStartValue = 0,
  phpEndValue = 80,
  phpspeed = 30;

let progressphp = setInterval(() => {
  phpStartValue++;

  phpValue.textContent = `${phpStartValue}%`;
  phpProgress.style.background = `conic-gradient(#20c997 ${
    phpStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (phpStartValue == phpEndValue) {
    clearInterval(progressphp);
  }
}, phpspeed);

// reactjs progress circular bar 
let reactProgress = document.querySelector(".reactjs"),
  reactValue = document.querySelector(".reactjs-progress");

let reactStartValue = 0,
  reactEndValue = 80,
  rjsspeed = 30;

let progressreact = setInterval(() => {
  reactStartValue++;

  reactValue.textContent = `${reactStartValue}%`;
  reactProgress.style.background = `conic-gradient(#3f396d ${
    reactStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (reactStartValue == reactEndValue) {
    clearInterval(progressreact);
  }
}, rjsspeed);


// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});


// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// Contact Form Local Storage Functionality
document.addEventListener("DOMContentLoaded", function() {
  console.log('DOM Content Loaded - Contact form script initialized');
  
  const contactForm = document.querySelector('.contact-form');
  const submitBtn = document.getElementById('mainContactSubmitBtn');
  const statusDiv = document.getElementById('mainContactStatus');

  console.log('Submit button found:', submitBtn);
  console.log('Status div found:', statusDiv);

  if (submitBtn) {
    submitBtn.addEventListener('click', handleContactSubmit);
    console.log('Event listener attached to submit button');
  } else {
    console.error('Submit button not found!');
  }

  function handleContactSubmit() {
    console.log('Contact submit function called');
    
    // Get form values
    const name = document.getElementById('mainContactName').value.trim();
    const email = document.getElementById('mainContactEmail').value.trim();
    const mobile = document.getElementById('mainContactMobile').value.trim();
    const message = document.getElementById('mainContactMessage').value.trim();

    console.log('Form values:', { name, email, mobile, message });

    // Validate form
    if (!name || !email || !mobile || !message) {
      showStatus('Please fill in all fields', 'error');
      return;
    }

    if (!isValidEmail(email)) {
      showStatus('Please enter a valid email address', 'error');
      return;
    }

    // Create contact object
    const contactData = {
      id: Date.now(),
      name: name,
      email: email,
      mobile: mobile,
      message: message,
      timestamp: new Date().toISOString(),
      status: 'new'
    };

    console.log('Contact data created:', contactData);

    // Save to localStorage
    saveContactToStorage(contactData);

    // Clear form
    clearContactForm();

    // Show success message
    showStatus('Thank you! Your message has been saved successfully.', 'success');

    // Optional: Log to console for debugging (remove in production)
    console.log('Contact saved:', contactData);
  }

  function saveContactToStorage(contactData) {
    try {
      // Get existing contacts or initialize empty array
      let contacts = JSON.parse(localStorage.getItem('portfolioContacts')) || [];
      
      // Add new contact
      contacts.push(contactData);
      
      // Save back to localStorage
      localStorage.setItem('portfolioContacts', JSON.stringify(contacts));
      
      // Also save individual contact for easy access
      localStorage.setItem(`contact_${contactData.id}`, JSON.stringify(contactData));
      
    } catch (error) {
      console.error('Error saving contact:', error);
      showStatus('Error saving contact. Please try again.', 'error');
    }
  }

  function clearContactForm() {
    document.getElementById('mainContactName').value = '';
    document.getElementById('mainContactEmail').value = '';
    document.getElementById('mainContactMobile').value = '';
    document.getElementById('mainContactMessage').value = '';
  }

  function showStatus(message, type) {
    if (statusDiv) {
      statusDiv.innerHTML = `<div class="alert alert-${type === 'success' ? 'success' : 'danger'} alert-dismissible fade show" role="alert">
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;
      
      // Auto-hide success messages after 5 seconds
      if (type === 'success') {
        setTimeout(() => {
          statusDiv.innerHTML = '';
        }, 5000);
      }
    }
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Function to get all contacts (for admin purposes)
  window.getStoredContacts = function() {
    try {
      const contacts = JSON.parse(localStorage.getItem('portfolioContacts')) || [];
      return contacts;
    } catch (error) {
      console.error('Error retrieving contacts:', error);
      return [];
    }
  };

  // Function to clear all contacts (for admin purposes)
  window.clearAllContacts = function() {
    try {
      localStorage.removeItem('portfolioContacts');
      // Clear individual contact items
      const keys = Object.keys(localStorage);
      keys.forEach(key => {
        if (key.startsWith('contact_')) {
          localStorage.removeItem(key);
        }
      });
      console.log('All contacts cleared from localStorage');
    } catch (error) {
      console.error('Error clearing contacts:', error);
    }
  };

  // Function to export contacts as JSON (for admin purposes)
  window.exportContacts = function() {
    try {
      const contacts = getStoredContacts();
      const dataStr = JSON.stringify(contacts, null, 2);
      const dataBlob = new Blob([dataStr], {type: 'application/json'});
      const url = URL.createObjectURL(dataBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `portfolio_contacts_${new Date().toISOString().split('T')[0]}.json`;
      link.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error exporting contacts:', error);
    }
  };

  // Admin Panel Functions
  window.toggleAdminPanel = function() {
    const adminPanel = document.getElementById('adminPanel');
    const adminToggleBtn = document.getElementById('adminToggleBtn');
    
    if (adminPanel.style.display === 'none' || adminPanel.style.display === '') {
      adminPanel.style.display = 'block';
      adminToggleBtn.style.display = 'none';
      // Reset login state when opening panel
      resetAdminLogin();
    } else {
      adminPanel.style.display = 'none';
      adminToggleBtn.style.display = 'block';
    }
  };

  // Password Protection Functions
  window.loginAdmin = function() {
    const password = document.getElementById('adminPassword').value;
    const loginStatus = document.getElementById('loginStatus');
    const loginSection = document.getElementById('adminLoginSection');
    const controlsSection = document.getElementById('adminControlsSection');
    
    if (password === '2025') {
      // Correct password
      loginStatus.innerHTML = '<div style="color: #28a745;">✅ Login successful!</div>';
      loginSection.style.display = 'none';
      controlsSection.style.display = 'block';
      
      // Store login state in sessionStorage
      sessionStorage.setItem('adminLoggedIn', 'true');
      
      // Clear password field
      document.getElementById('adminPassword').value = '';
      
      // Auto-hide success message
      setTimeout(() => {
        loginStatus.innerHTML = '';
      }, 2000);
      
    } else {
      // Wrong password
      loginStatus.innerHTML = '<div style="color: #dc3545;">❌ Wrong password! Try again.</div>';
      document.getElementById('adminPassword').value = '';
      
      // Auto-hide error message
      setTimeout(() => {
        loginStatus.innerHTML = '';
      }, 3000);
    }
  };

  window.logoutAdmin = function() {
    const loginSection = document.getElementById('adminLoginSection');
    const controlsSection = document.getElementById('adminControlsSection');
    const adminStatus = document.getElementById('adminStatus');
    
    // Reset to login state
    loginSection.style.display = 'block';
    controlsSection.style.display = 'none';
    adminStatus.innerHTML = '';
    
    // Clear session
    sessionStorage.removeItem('adminLoggedIn');
    
    // Clear password field
    document.getElementById('adminPassword').value = '';
  };

  function resetAdminLogin() {
    const loginSection = document.getElementById('adminLoginSection');
    const controlsSection = document.getElementById('adminControlsSection');
    const loginStatus = document.getElementById('loginStatus');
    
    // Check if already logged in
    if (sessionStorage.getItem('adminLoggedIn') === 'true') {
      loginSection.style.display = 'none';
      controlsSection.style.display = 'block';
    } else {
      loginSection.style.display = 'block';
      controlsSection.style.display = 'none';
    }
    
    loginStatus.innerHTML = '';
  }

  // Add Enter key support for password field
  document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      const passwordField = document.getElementById('adminPassword');
      if (document.activeElement === passwordField) {
        loginAdmin();
      }
    }
  });

  window.viewContacts = function() {
    const contacts = getStoredContacts();
    const statusDiv = document.getElementById('adminStatus');
    
    if (contacts.length === 0) {
      statusDiv.innerHTML = '<div style="color: #666;">No contacts found in storage.</div>';
      return;
    }
    
    let html = '<div style="max-height: 200px; overflow-y: auto; border: 1px solid #ddd; padding: 10px; background: #f9f9f9; border-radius: 5px;">';
    html += `<h6 style="margin: 0 0 10px 0; color: #3f396d;">📋 Total Contacts: ${contacts.length}</h6>`;
    
    contacts.forEach((contact, index) => {
      const date = new Date(contact.timestamp).toLocaleString();
      html += `
        <div style="border-bottom: 1px solid #eee; padding: 8px 0; margin-bottom: 8px;">
          <strong>${contact.name}</strong> (${contact.email})<br>
          <small style="color: #666;">📱 ${contact.mobile}</small><br>
          <small style="color: #666;">📅 ${date}</small><br>
          <div style="background: white; padding: 5px; border-radius: 3px; margin-top: 5px; font-size: 11px;">
            "${contact.message.substring(0, 100)}${contact.message.length > 100 ? '...' : ''}"
          </div>
        </div>
      `;
    });
    
    html += '</div>';
    statusDiv.innerHTML = html;
  };

  window.showContactCount = function() {
    const contacts = getStoredContacts();
    const statusDiv = document.getElementById('adminStatus');
    statusDiv.innerHTML = `<div style="color: #3f396d; font-weight: bold;">📊 Total Contacts Stored: ${contacts.length}</div>`;
  };

  // Initialize admin panel
  document.addEventListener("DOMContentLoaded", function() {
    // Show admin toggle button by default
    const adminToggleBtn = document.getElementById('adminToggleBtn');
    if (adminToggleBtn) {
      adminToggleBtn.style.display = 'block';
    }
  });

  // Blog Contact Form Functions
  window.submitBlogContact = function(modalNumber) {
    console.log('Blog contact submit function called for modal:', modalNumber);
    
    // Get form values
    const name = document.getElementById(`blogContactName${modalNumber}`).value.trim();
    const email = document.getElementById(`blogContactEmail${modalNumber}`).value.trim();
    const mobile = document.getElementById(`blogContactMobile${modalNumber}`).value.trim();
    const message = document.getElementById(`blogContactMessage${modalNumber}`).value.trim();
    const statusDiv = document.getElementById(`blogContactStatus${modalNumber}`);

    console.log('Blog form values:', { name, email, mobile, message });

    // Validate form
    if (!name || !email || !mobile || !message) {
      showBlogStatus(`Please fill in all fields`, 'error', modalNumber);
      return;
    }

    if (!isValidEmail(email)) {
      showBlogStatus(`Please enter a valid email address`, 'error', modalNumber);
      return;
    }

    // Create contact object with blog context
    const contactData = {
      id: Date.now(),
      name: name,
      email: email,
      mobile: mobile,
      message: message,
      timestamp: new Date().toISOString(),
      status: 'new',
      source: `Blog Modal ${modalNumber}`,
      project: getProjectName(modalNumber)
    };

    console.log('Blog contact data created:', contactData);

    // Save to localStorage (same as main contact form)
    saveContactToStorage(contactData);

    // Clear form
    clearBlogContactForm(modalNumber);

    // Show success message
    showBlogStatus(`Thank you! Your comment has been saved successfully.`, 'success', modalNumber);

    // Optional: Log to console for debugging
    console.log('Blog contact saved:', contactData);
  };

  function getProjectName(modalNumber) {
    const projects = {
      1: 'Color Game - React Native',
      2: 'Real Estate Website - MERN Stack',
      3: 'E-commerce App - React Native'
    };
    return projects[modalNumber] || 'Unknown Project';
  }

  function clearBlogContactForm(modalNumber) {
    document.getElementById(`blogContactName${modalNumber}`).value = '';
    document.getElementById(`blogContactEmail${modalNumber}`).value = '';
    document.getElementById(`blogContactMobile${modalNumber}`).value = '';
    document.getElementById(`blogContactMessage${modalNumber}`).value = '';
  }

  function showBlogStatus(message, type, modalNumber) {
    const statusDiv = document.getElementById(`blogContactStatus${modalNumber}`);
    if (statusDiv) {
      statusDiv.innerHTML = `<div class="alert alert-${type === 'success' ? 'success' : 'danger'} alert-dismissible fade show" role="alert">
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;
      
      // Auto-hide success messages after 5 seconds
      if (type === 'success') {
        setTimeout(() => {
          statusDiv.innerHTML = '';
        }, 5000);
      }
    }
  }
});