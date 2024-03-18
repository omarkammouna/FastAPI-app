import React from 'react'

function StarterPage() {
  return (
    <div>

<div className="body d-flex py-lg-3 py-md-2">
  <div className="container-xxl">
    <div className="col-12">
      <div className="card mb-3">
        <div className="card-body text-center p-5">
          <img
            src="dist/assets/images/no-data.svg"
            className="w220"
            alt="No Data"
          />
          <div className="mt-4 mb-3">
            <span className="text-muted">No data to show</span>
          </div>
          <button type="button" className="btn btn-white border lift">
            Get Started
          </button>
          <button type="button" className="btn btn-primary border lift">
            Back to Home
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

        
    </div>
  )
}

export default StarterPage