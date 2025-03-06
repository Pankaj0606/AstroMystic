import React from 'react';
import './Consultation.css';
import { FaDownload } from 'react-icons/fa';  // Using react-icons for download icon

const Consultation = () => {
  return (
    <div className="consultation-container">
      <h1>Consultation / Services</h1>

      {/* Introduction or description */}
      <div className="consultation-intro">
        <p>
            YOU CAN CHOOSE FROM THE CONSULTATION OPTION BELOW. GO THROUGH IT. MAKE PAYMENT, AND SEND ME THE DETAILS AT MY <br />
            EMAIL ADDRESS - <a href="mailto:sheviastrology@gmail.com" className="consultation-link">sheviastrology@gmail.com</a>        
        </p>
        <p>
            NOTE - ONLY POSSIBILITY OF OUTCOME AND GUIDANCE IS PROVIDED. NO PREDICTION OF ANY KIND. OUR LIFE DEPENDS UPON OUR <br />
            PRESENT DEEDS.
        </p>
      </div>

      {/* Downloadable PDF files section */}
      <div className="pdf-section">
        <div className="pdf-list">
          <div className="pdf-item">
            <span className="pdf-name">MARRIAGE AND CAREER CONSULTATION (pdf)</span>
            <a href="/path/to/your/file1.pdf" download className="pdf-download">
              Download <FaDownload className="download-icon" />
            </a>
          </div>
          <div className="pdf-item">
            <span className="pdf-name">FOREIGN SETTLEMENT (pdf)</span>
            <a href="/path/to/your/file2.pdf" download className="pdf-download">
              Download <FaDownload className="download-icon" />
            </a>
          </div>
          <div className="pdf-item">
            <span className="pdf-name">PAST LIFE CONSULTATION (pdf)</span>
            <a href="/path/to/your/file3.pdf" download className="pdf-download">
              Download <FaDownload className="download-icon" />
            </a>
          </div>
          <div className="pdf-item">
            <span className="pdf-name">ARUDHA LAGNA ANALYSIS (pdf)</span>
            <a href="/path/to/your/file3.pdf" download className="pdf-download">
              Download <FaDownload className="download-icon" />
            </a>
          </div>
          <div className="pdf-item">
            <span className="pdf-name">UNDERSTANDING YOUR MOON CHART (pdf)</span>
            <a href="/path/to/your/file3.pdf" download className="pdf-download">
              Download <FaDownload className="download-icon" />
            </a>
          </div>
          <div className="pdf-item">
            <span className="pdf-name">JAIMINI KARAKAS (pdf)</span>
            <a href="/path/to/your/file3.pdf" download className="pdf-download">
              Download <FaDownload className="download-icon" />
            </a>
          </div>
          <div className="pdf-item">
            <span className="pdf-name">CAREER CONSULTATION (pdf)</span>
            <a href="/path/to/your/file3.pdf" download className="pdf-download">
              Download <FaDownload className="download-icon" />
            </a>
          </div>
          <div className="pdf-item">
            <span className="pdf-name">UNDERSTANDING YOUR ASCENDANT (pdf)</span>
            <a href="/path/to/your/file3.pdf" download className="pdf-download">
              Download <FaDownload className="download-icon" />
            </a>
          </div>
          <div className="pdf-item">
            <span className="pdf-name">THE MYSTERY OF RAHU KETU (pdf)</span>
            <a href="/path/to/your/file3.pdf" download className="pdf-download">
              Download <FaDownload className="download-icon" />
            </a>
          </div>
          <div className="pdf-item">
            <span className="pdf-name">SATURN AND YOUR KARMAS (pdf)</span>
            <a href="/path/to/your/file3.pdf" download className="pdf-download">
              Download <FaDownload className="download-icon" />
            </a>
          </div>
          <div className="pdf-item">
            <span className="pdf-name">DIVISIONAL CHART READING (pdf)</span>
            <a href="/path/to/your/file3.pdf" download className="pdf-download">
              Download <FaDownload className="download-icon" />
            </a>
          </div>
          <div className="pdf-item">
            <span className="pdf-name">ASK ANY QUESTION (pdf)</span>
            <a href="/path/to/your/file3.pdf" download className="pdf-download">
              Download <FaDownload className="download-icon" />
            </a>
          </div>
          <div className="pdf-item">
            <span className="pdf-name">MARRIAGE RELATIONSHIP CONSULTATION (pdf)</span>
            <a href="/path/to/your/file3.pdf" download className="pdf-download">
              Download <FaDownload className="download-icon" />
            </a>
          </div>
          <div className="pdf-item">
            <span className="pdf-name">MARRIAGE, CAREER, HEALTH, FINANCE (pdf)</span>
            <a href="/path/to/your/file3.pdf" download className="pdf-download">
              Download <FaDownload className="download-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Consultation;
