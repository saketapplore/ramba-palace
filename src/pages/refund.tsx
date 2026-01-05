import React from 'react';

const RefundPage: React.FC = () => {
  return (
    <>
      {/* Main Title */}
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <h1 style={{ 
          fontSize: '32px', 
          fontWeight: 'bold', 
          color: '#374151', 
          marginBottom: '16px',
          fontFamily: '"Lato", sans-serif'
        }}>
          REFUNDS & CANCELLATIONS
        </h1>
      </div>

      {/* Content Container */}
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '0 24px 64px 24px'
      }}>
        {/* Standard Deposit/Guarantee Policy Section */}
        <div style={{ marginBottom: '48px' }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#374151',
            marginBottom: '24px',
            fontFamily: '"Lato", sans-serif'
          }}>
            Standard deposit/ guarantee policy:
          </h2>

          {/* For FIT's */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#374151',
              marginBottom: '16px',
              fontFamily: '"Lato", sans-serif'
            }}>
              For FIT's
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li style={{
                marginBottom: '16px',
                color: '#6b7280',
                fontSize: '16px',
                lineHeight: '1.6',
                fontFamily: '"Lato", sans-serif',
                paddingLeft: '24px',
                position: 'relative'
              }}>
                <span style={{
                  position: 'absolute',
                  left: 0,
                  color: '#374151'
                }}>•</span>
                In the event of any cancellation or amendment within 30 days of the date of arrival, would levy retention for 50% of total room charge. In-case of one night's booking, 100% retention will be charged.
              </li>
              <li style={{
                marginBottom: '16px',
                color: '#6b7280',
                fontSize: '16px',
                lineHeight: '1.6',
                fontFamily: '"Lato", sans-serif',
                paddingLeft: '24px',
                position: 'relative'
              }}>
                <span style={{
                  position: 'absolute',
                  left: 0,
                  color: '#374151'
                }}>•</span>
                For any cancellation or amendment made within 14 days of arrival, will incur a cancellation charge of entire duration of stay.
              </li>
            </ul>
          </div>

          {/* For Groups */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#374151',
              marginBottom: '16px',
              fontFamily: '"Lato", sans-serif'
            }}>
              For Groups
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li style={{
                marginBottom: '16px',
                color: '#6b7280',
                fontSize: '16px',
                lineHeight: '1.6',
                fontFamily: '"Lato", sans-serif',
                paddingLeft: '24px',
                position: 'relative'
              }}>
                <span style={{
                  position: 'absolute',
                  left: 0,
                  color: '#374151'
                }}>•</span>
                For groups availing between 7 rooms – 20 rooms, hotel must receive 25% advance 90 days prior to arrival. Failure to comply will result in cancellation of booking. A further 25% advance is required 60 days prior to the date of arrival. The balance must be paid 30 days prior to the date of arrival.
              </li>
              <li style={{
                marginBottom: '16px',
                color: '#6b7280',
                fontSize: '16px',
                lineHeight: '1.6',
                fontFamily: '"Lato", sans-serif',
                paddingLeft: '24px',
                position: 'relative'
              }}>
                <span style={{
                  position: 'absolute',
                  left: 0,
                  color: '#374151'
                }}>•</span>
                For group reservations made within 30 days, we must receive deposit/credit card guarantee and rooming list within 5 working days of confirming the offer, failing which, the booking will be treated as cancelled.
              </li>
            </ul>
          </div>

          <p style={{
            color: '#6b7280',
            fontSize: '16px',
            lineHeight: '1.6',
            fontFamily: '"Lato", sans-serif',
            marginBottom: '32px'
          }}>
            Any eligible refund will be processed in 5-7 Working Days.
          </p>
        </div>

        {/* Standard Cancellation/Refund Policy Section */}
        <div style={{ marginBottom: '48px' }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#374151',
            marginBottom: '24px',
            fontFamily: '"Lato", sans-serif'
          }}>
            Standard cancellation/refund policy
          </h2>

          {/* For FIT's */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#374151',
              marginBottom: '16px',
              fontFamily: '"Lato", sans-serif'
            }}>
              For FIT's
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li style={{
                marginBottom: '16px',
                color: '#6b7280',
                fontSize: '16px',
                lineHeight: '1.6',
                fontFamily: '"Lato", sans-serif',
                paddingLeft: '24px',
                position: 'relative'
              }}>
                <span style={{
                  position: 'absolute',
                  left: 0,
                  color: '#374151'
                }}>•</span>
                In the event of any cancellation or amendment of the confirmed booking within 90 days of the date of arrival, would levy retention for 50% of total room charge.
              </li>
              <li style={{
                marginBottom: '16px',
                color: '#6b7280',
                fontSize: '16px',
                lineHeight: '1.6',
                fontFamily: '"Lato", sans-serif',
                paddingLeft: '24px',
                position: 'relative'
              }}>
                <span style={{
                  position: 'absolute',
                  left: 0,
                  color: '#374151'
                }}>•</span>
                In the event of any late cancelation/amendment within 45 days of arrival, will incur a cancellation charge of entire duration of stay.
              </li>
            </ul>
          </div>

          {/* For Groups */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#374151',
              marginBottom: '16px',
              fontFamily: '"Lato", sans-serif'
            }}>
              For Groups (between 7 rooms – 16 Rooms)
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li style={{
                marginBottom: '16px',
                color: '#6b7280',
                fontSize: '16px',
                lineHeight: '1.6',
                fontFamily: '"Lato", sans-serif',
                paddingLeft: '24px',
                position: 'relative'
              }}>
                <span style={{
                  position: 'absolute',
                  left: 0,
                  color: '#374151'
                }}>•</span>
                Cancellation of the entire group before 90 days prior to arrival, no cancellation charge will be applied.
              </li>
              <li style={{
                marginBottom: '16px',
                color: '#6b7280',
                fontSize: '16px',
                lineHeight: '1.6',
                fontFamily: '"Lato", sans-serif',
                paddingLeft: '24px',
                position: 'relative'
              }}>
                <span style={{
                  position: 'absolute',
                  left: 0,
                  color: '#374151'
                }}>•</span>
                Cancellation of the entire group between 89-60 days prior to arrival, a 25% of the total accommodation cost will be charged
              </li>
              <li style={{
                marginBottom: '16px',
                color: '#6b7280',
                fontSize: '16px',
                lineHeight: '1.6',
                fontFamily: '"Lato", sans-serif',
                paddingLeft: '24px',
                position: 'relative'
              }}>
                <span style={{
                  position: 'absolute',
                  left: 0,
                  color: '#374151'
                }}>•</span>
                Cancellation of the entire group between 59-30 days prior to arrival, a 50% of the total accommodation cost will be charged
              </li>
              <li style={{
                marginBottom: '16px',
                color: '#6b7280',
                fontSize: '16px',
                lineHeight: '1.6',
                fontFamily: '"Lato", sans-serif',
                paddingLeft: '24px',
                position: 'relative'
              }}>
                <span style={{
                  position: 'absolute',
                  left: 0,
                  color: '#374151'
                }}>•</span>
                Cancellation of the entire group within 30 days of arrival, 100% of the total billing will be charged.
              </li>
            </ul>
          </div>
        </div>

        {/* Force Majeure Section */}
        <div style={{ marginBottom: '48px' }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#374151',
            marginBottom: '24px',
            fontFamily: '"Lato", sans-serif'
          }}>
            Force Majeure
          </h2>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0
          }}>
            <li style={{
              marginBottom: '16px',
              color: '#6b7280',
              fontSize: '16px',
              lineHeight: '1.6',
              fontFamily: '"Lato", sans-serif',
              paddingLeft: '24px',
              position: 'relative'
            }}>
              <span style={{
                position: 'absolute',
                left: 0,
                color: '#374151'
              }}>•</span>
              Rambha Palace shall not be liable for cancellations or disruptions caused due to events beyond its reasonable control, including natural calamities, government restrictions, pandemics, or force majeure events.
            </li>
          </ul>
        </div>

        {/* Final Note Section */}
        <div>
          <h2 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#374151',
            marginBottom: '24px',
            fontFamily: '"Lato", sans-serif'
          }}>
            Final Note
          </h2>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0
          }}>
            <li style={{
              marginBottom: '16px',
              color: '#6b7280',
              fontSize: '16px',
              lineHeight: '1.6',
              fontFamily: '"Lato", sans-serif',
              paddingLeft: '24px',
              position: 'relative'
            }}>
              <span style={{
                position: 'absolute',
                left: 0,
                color: '#374151'
              }}>•</span>
              All disputes shall be subject to Indian law and the exclusive jurisdiction of courts at Odisha.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default RefundPage;

