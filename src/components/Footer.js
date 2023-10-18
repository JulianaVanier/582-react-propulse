import React from 'react'

function Footer() {
  return (
    <>
            <footer>
            <div class="container">
                <div class="footer_grid">
                    <div><img src="/assets/image/propulse-sportswear-high-resolution-logo-black-on-transparent-background.png" alt="" /></div>
                    <div>
                        <p>Company</p>
                        <ul class="ul-list" role="list">
                            <li role="listitem">About</li>
                            <li role="listitem">Team</li>
                            <li role="listitem">Showcase</li>
                            <li role="listitem">Blog</li>
                            <li role="listitem">Contact</li>
                            <li role="listitem">Demo design</li>
                        </ul>
                    </div>
                    <div>
                        <p>Follow us</p>
                        <ul class="ul-list" role="list">
                            <li role="listitem">Facebook</li>
                            <li role="listitem">Twitter</li>
                            <li role="listitem">Youtube</li>
                        </ul>
                    </div>
                    <div>
                        <p>Connect</p>
                        <ul class="ul-list" role="list">
                            <li role="listitem">+001 234 56 78</li>
                            <li role="listitem">hello@dream-theme.com</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <div class="container">
                <div class="privacy">
                    <div class="privacy_left">
                        <p>
                            © Copyright 2022 Dream-Theme. All rights reserved.
                        </p>
                    </div>
                    <div class="privacy_right">
                        <p>Privacy policy</p>
                        <p>Terms & conditions</p>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer