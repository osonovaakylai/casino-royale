import { Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import { useEffect } from 'react';

type GameModalProps = {
  open: boolean;
  onClose: () => void;
};

const GAME_URL =
  'https://gateway.eva-digital-playground.com/v0/casino/games/launch?gameId=n2-novomatic-book-of-ra-deluxe&channel=desktop&partnerKey=0wl&lobbyUrl=https://chinchincasino.com&mode=demo&language=en';

const Overlay = styled(Box)(({ theme }) => ({
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0,0,0,0.8)',
  zIndex: theme.zIndex.modal + 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const ModalContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '90%',
  height: '90%',
  backgroundColor: '#000',
  borderRadius: theme.spacing(1),
  overflow: 'hidden',
}));

const CloseButton = styled(IconButton)({
  position: 'absolute',
  top: 10,
  right: 10,
  color: '#fff',
  zIndex: 10,
  cursor: 'pointer',
});

const GameFrame = styled('iframe')({
  width: '100%',
  height: '100%',
  border: 'none',
});

const GameModal = ({ open, onClose }: GameModalProps) => {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (open) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <CloseIcon />
        </CloseButton>
        <GameFrame src={GAME_URL} title="Casino Game" />
      </ModalContent>
    </Overlay>
  );
};

export default GameModal;
