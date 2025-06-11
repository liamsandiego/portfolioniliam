import React from 'react';
import profileImage from './profile.png'; // Adjust the path based on where you put your image

function About() {
  return (
    <section id="about" style={{
      padding: '5rem 0',
      backgroundColor: 'white'
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
            About Me
          </h2>
          <div style={{
            marginTop: '0.5rem',
            height: '4px',
            width: '6rem',
            backgroundColor: '#6366f1',
            margin: '0.5rem auto 0'
          }}></div>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          alignItems: 'center'
        }}>
          <div>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '1rem'
            }}>
              Who I Am
            </h3>
            <p style={{
              color: '#6b7280',
              marginBottom: '1.5rem',
              fontSize: '1.1rem',
              lineHeight: '1.6'
            }}>
              I'm a passionate web developer with a strong focus on creating intuitive and engaging user experiences.
              With expertise in modern web technologies, I bring ideas to life through clean, efficient code and thoughtful design.
            </p>
            <p style={{
              color: '#6b7280',
              marginBottom: '1.5rem',
              fontSize: '1.1rem',
              lineHeight: '1.6'
            }}>
              My journey began 5 years ago, and since then, I've worked on projects from small business websites to complex apps.
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem'
            }}>
              <div>
                <h4 style={{
                  fontWeight: '500',
                  color: '#1f2937',
                  marginBottom: '0.25rem'
                }}>
                  Education
                </h4>
                <p style={{
                  color: '#6b7280'
                }}>
                  Bachelor's in Computer Engineering
                </p>
              </div>
              <div>
                <h4 style={{
                  fontWeight: '500',
                  color: '#1f2937',
                  marginBottom: '0.25rem'
                }}>
                  Experience
                </h4>
                <p style={{
                  color: '#6b7280'
                }}>
                  3+ Years of Front end developing
                </p>
              </div>
              <div>
                <h4 style={{
                  fontWeight: '500',
                  color: '#1f2937',
                  marginBottom: '0.25rem'
                }}>
                  Location
                </h4>
                <p style={{
                  color: '#6b7280'
                }}>
                  North Korea
                </p>
              </div>
              <div>
                <h4 style={{
                  fontWeight: '500',
                  color: '#1f2937',
                  marginBottom: '0.25rem'
                }}>
                  Availability
                </h4>
                <p style={{
                  color: '#6b7280'
                }}>
                  Freelance & Full-time
                </p>
              </div>
            </div>
          </div>
          <div style={{
            backgroundColor: '#f0f4ff',
            borderRadius: '0.75rem',
            padding: '1.5rem',
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
          }}>
            <div style={{
              width: '100%',
              height: '300px',
              borderRadius: '0.5rem',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#e0e7ff'
            }}>
              <img 
                src={profileImage} 
                alt="Profile" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '0.5rem'
                }}
                onError={(e) => {
                  // Fallback if image doesn't load
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = '<div style="fontSize: 4rem">👨‍💻</div>';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;