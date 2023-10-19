import React from 'react'
import { useParams } from 'react-router-dom';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon } from 'react-share'

export default function Share(poemId) {
    const share = `http://localhost:5173/poem/${poemId}`;

  return (
    <div className="share-buttons">
    <FacebookShareButton url={share}>
        <FacebookIcon size={32} round />
    </FacebookShareButton>
    <TwitterShareButton url={share}>
        <TwitterIcon size={32} round />
    </TwitterShareButton>
</div>
  )
}
