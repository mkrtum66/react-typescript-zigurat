import React, { useEffect, useState } from 'react';
import { StyledHeader, StyledTopRightNavStyles } from './Navbar.styled';
import NavLanguageSelector from '../../molecules/NavLanguageSelector';
import useMobile from '../../../hooks/Mobile';
import NavItems from '../../molecules/NavItems';
import ThemePicker from '../../atoms/ThemePicker';
import MobileCollapse from './mobile';
import { ThemeProps } from '../../../types';
import Button from '../../atoms/Button';
import ConnectPopup from './ConnectPopup';
import { detectProvider } from 'marina-provider';
import ErrorPopup from './ErrorPopup';
import SignInPopup from './SignInPopup';
import LoggedInUser from '../../atoms/LoggedInUser';
import { IWalletData } from '../../atoms/LoggedInUser/types';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearWalletData,
  setWalletData,
  setWalletEnable,
} from '../../../redux/actions/walletAction';
import { setLoading } from '../../../redux/actions/loadingAction';
// import SmallLoader from '../../atoms/SmallLoader';

const Navbar = ({ switchTheme }: ThemeProps) => {
  const isMobile = useMobile();
  const dispatch = useDispatch();
  const walletData: IWalletData = useSelector((state: any) => state.wallet);
  // const loading = useSelector((state: any) => state.loading.isLoading);

  const [connectPopup, setConnectPopup] = useState(false);
  const [extensionError, setExtensionError] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);
  const [connected, setIsConnected] = useState(!!walletData.data.address);

  useEffect(() => {
    if (!!walletData.data.address) {
      setIsConnected(true);
    } else {
      setIsConnected(false);
    }
  }, [walletData]);

  const handleClickConnect = async () => {
    setExtensionError(false);
    dispatch(setLoading(true));
    try {
      const marina = await detectProvider('marina');
      const enabled = await marina.isEnabled();
      if (!enabled) {
        await marina.enable();
        dispatch(setWalletEnable(true));
      }
      setConnectPopup(false);
      setOpenSignIn(true);
      dispatch(setLoading(false));
      const data = await marina.signMessage('Welcome Back!');
      setOpenSignIn(false);
      dispatch(setWalletData(data));
      setIsConnected(true);
    } catch (err) {
      dispatch(setLoading(false));
      setExtensionError(true);
      setConnectPopup(false);
    } finally {
      dispatch(setLoading(false));
    }
  };
  const handleDisconnect = () => {
    dispatch(clearWalletData());
    setIsConnected(false);
  };

  return (
    <>
      {!isMobile ? (
        <StyledHeader className="top-nav">
          <NavItems />
          <StyledTopRightNavStyles size="middle">
            <NavLanguageSelector />
            <ThemePicker onClick={switchTheme} />
            {!connected ? (
              <Button outlined={true} onClick={() => setConnectPopup(true)}>
                Connect
              </Button>
            ) : (
              <LoggedInUser data={walletData.data} handleDisconnect={handleDisconnect} />
            )}
          </StyledTopRightNavStyles>
        </StyledHeader>
      ) : (
        <MobileCollapse switchTheme={switchTheme} setConnectPopup={setConnectPopup} />
      )}
      <ConnectPopup
        isOpen={connectPopup}
        setIsOpen={setConnectPopup}
        isMobile={isMobile}
        onSelect={handleClickConnect}
      />
      <ErrorPopup
        isOpen={extensionError}
        setIsOpen={setExtensionError}
        isMobile={isMobile}
        back={() => {
          setExtensionError(false);
          setConnectPopup(true);
        }}
      />
      <SignInPopup isOpen={openSignIn} setIsOpen={setOpenSignIn} isMobile={isMobile} />
      {/*{loading ? <SmallLoader /> : ''}*/}
    </>
  );
};

export default Navbar;
