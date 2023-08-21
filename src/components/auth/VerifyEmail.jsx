import React from 'react'
import { useLocation } from 'react-router-dom';

export default function VerifyEmail() {
  const location = useLocation();
  
  const isVerified = location.state ? location.state.isVerified : null
  console.log(isVerified)

  return (
    <div className="page">
  <div className="verify-request">
    <div className="card">
      <h1>Account Created</h1>
      <p>Your account is created. Please verify your account by just clicking on link that we sent by email.</p>
      <p>
        <a className="site" href="https://www.perplexity.ai">
          www.incu-bot.ai
        </a>
      </p>
    </div>
  </div>
</div>

  )
}
