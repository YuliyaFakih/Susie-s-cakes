import React from 'react'
import styles from './Footer.module.css'
import footer from '../../assets/img/footer.png'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const Footer = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
    return (
        <div className={styles.footer}>
            <div>
               <img src={footer} alt="#" />
                <ul>
                    <li className={styles.none}>Susiecakes</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Weddings</li>
                    <li>Decoration</li>
                    <li className={styles.none}>Locations</li>
                    <li>Order online</li>
                </ul>
                <ul>
                    <li className={styles.none}>Careers</li>
                    <li className={styles.none}>Purchase gift cards</li>
                    <li className={styles.none}>Check gift card balance</li>
                    <li className={styles.none}>Susie favors rewards</li>
                </ul>
                <ul>
                    <li>Contact</li>
                    <li>FAQ</li>
                    <li className={styles.none}>Legal</li>
                    <li>Terms and conditions</li>
                    <li className={styles.none}>Susiefavors legal</li>
                    <li className={styles.none}>Susiefavors terms</li>
                </ul> 
                <div className={styles.btnMore}>
                    <Button onClick={handleClick}>
                        More
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>
                            Susiecakes
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            Locations
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            Careers
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            Purchase gift cards
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            Check gift card balance
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            Susie favors rewards
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            Legal
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            Susiefavors legal
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            Susiefavors terms
                        </MenuItem>
                    </Menu>
                </div>
            </div>
            <div className={styles.copy}>Copyright © SusieCakes 2021</div>
            
        </div>
    )
}

export default Footer