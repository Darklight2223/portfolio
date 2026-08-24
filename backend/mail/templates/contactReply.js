exports.contactConfirmationEmail = (personName) => {
  return `<!DOCTYPE html>
      <html>
      
      <head>
          <meta charset="UTF-8">
          <title>Contact Confirmation</title>
          <style>
              body {
                  background-color: #f4f4f4;
                  font-family: Arial, sans-serif;
                  font-size: 16px;
                  line-height: 1.6;
                  color: #333333;
                  margin: 0;
                  padding: 0;
              }
      
              .container {
                  max-width: 600px;
                  margin: 0 auto;
                  padding: 20px;
                  text-align: center;
                  background-color: #ffffff;
                  border-radius: 10px;
                  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              }
      
              .logo {
                  max-width: 150px;
                  margin-bottom: 20px;
              }
      
              .message {
                  font-size: 20px;
                  font-weight: bold;
                  margin-bottom: 20px;
              }
      
              .body {
                  font-size: 16px;
                  margin-bottom: 20px;
              }
      
              .cta {
                  display: inline-block;
                  padding: 12px 24px;
                  background-color: #007bff;
                  color: #ffffff;
                  text-decoration: none;
                  border-radius: 5px;
                  font-size: 18px;
                  font-weight: bold;
                  margin-top: 20px;
                  font-color: white
              }
      
              .support {
                  font-size: 14px;
                  color: #666666;
                  margin-top: 20px;
              }
      
              .highlight {
                  font-weight: bold;
                  color: #007bff;
              }
          </style>
      
      </head>
      
      <body>
          <div class="container">
              <div class="message">Thank You for Contacting Us!</div>
              <div class="body">
                  <p>Dear ${personName},</p>
                  <p>I greatly appreciate you reaching out to me. Your message has been received, and I will get back to you as soon as possible.</p>
                  <p>In the meantime, feel free to explore more about me and my work on my website.</p>
              </div>
              <a href="https://kanishk-kumar-portfolio.vercel.app/" class="cta">Visit Our Website</a>
          </div>
      </body>
      
      </html>`;
};

exports.contactMe = (personName, personEmail, messageContent) => {
  return `<!DOCTYPE html>
        <html>
        
        <head>
            <meta charset="UTF-8">
            <title>Contact Notification</title>
            <style>
                body {
                    background-color: #f4f4f4;
                    font-family: Arial, sans-serif;
                    font-size: 16px;
                    line-height: 1.6;
                    color: #333333;
                    margin: 0;
                    padding: 0;
                }
        
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    text-align: left;
                    background-color: #ffffff;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }
        
                .logo {
                    max-width: 150px;
                    margin-bottom: 20px;
                }
        
                .message {
                    font-size: 20px;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
        
                .body {
                    font-size: 16px;
                    margin-bottom: 20px;
                }
        
                .cta {
                    display: inline-block;
                    padding: 12px 24px;
                    background-color: #007bff;
                    color: #ffffff;
                    text-decoration: none;
                    border-radius: 5px;
                    font-size: 18px;
                    font-weight: bold;
                    margin-top: 20px;
                }
        
                .support {
                    font-size: 14px;
                    color: #666666;
                    margin-top: 20px;
                }
        
                .highlight {
                    font-weight: bold;
                    color: #007bff;
                }
            </style>
        
        </head>
        
        <body>
            <div class="container">
                <div class="message">New Contact Form Submission</div>
                <div class="body">
                    <p>You have received a new message from:</p>
                    <p><strong>Name:</strong> ${personName}</p>
                    <p><strong>Email:</strong> ${personEmail}</p>
                    <p><strong>Message:</strong></p>
                    <p>${messageContent}</p>
                </div>
            </div>
        </body>
        
        </html>`;
};
