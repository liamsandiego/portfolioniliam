import React from 'react';

function Contact() {
  return (
    <section id="contact" style={{
      padding: '5rem 0',
      backgroundColor: '#f0f4ff'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '4rem'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#1f2937'
          }}>
            Get In Touch
          </h2>
          <div style={{
            marginTop: '0.5rem',
            height: '4px',
            width: '6rem',
            backgroundColor: '#6366f1',
            margin: '0.5rem auto 1rem'
          }}></div>
          <p style={{
            marginTop: '1rem',
            color: '#6b7280',
            maxWidth: '600px',
            margin: '1rem auto 0',
            fontSize: '1.1rem'
          }}>
            Have a project in mind or want to collaborate? Let's connect!
          </p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {/* Phone Number */}
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '0.75rem',
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
            textAlign: 'center',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{
              fontSize: '2.5rem',
              marginBottom: '1rem'
            }}>
              📱
            </div>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '0.5rem'
            }}>
              Phone
            </h3>
            <p style={{
              color: '#6b7280',
              fontSize: '1.1rem'
            }}>
              +63 976 125 1961
            </p>
          </div>

          {/* Email */}
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '0.75rem',
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
            textAlign: 'center',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{
              fontSize: '2.5rem',
              marginBottom: '1rem'
            }}>
              ✉️
            </div>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '0.5rem'
            }}>
              Email
            </h3>
            <p style={{
              color: '#6b7280',
              fontSize: '1.1rem'
            }}>
              liamsandiego45@email.com
            </p>
          </div>
        </div>

        {/* Social Media */}
        <div style={{
          marginTop: '3rem',
          textAlign: 'center'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: '#1f2937',
            marginBottom: '2rem'
          }}>
            Follow Me
          </h3>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap'
          }}>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/Hereliesmili"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#1877f2',
                color: 'white',
                padding: '1rem',
                borderRadius: '50%',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '60px',
                height: '60px',
                fontSize: '1.5rem',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 10px 20px rgba(24, 119, 242, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              📘
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
                color: 'white',
                padding: '1rem',
                borderRadius: '50%',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '60px',
                height: '60px',
                fontSize: '1.5rem',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 10px 20px rgba(225, 48, 108, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              📷
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@milizofficial"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#ff0000',
                color: 'white',
                padding: '1rem',
                borderRadius: '50%',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '60px',
                height: '60px',
                fontSize: '1.5rem',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 10px 20px rgba(255, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              📺
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;