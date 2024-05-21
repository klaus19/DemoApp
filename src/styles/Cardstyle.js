import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  listContainer: {
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    margin: 8,
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden', // Ensure image does not overflow the card
  },
  cardInner: {
    width: '100%', // Ensure image takes full width of card
    aspectRatio: 1, // Ensure square aspect ratio for image
    overflow: 'hidden', // Ensure image does not overflow the card
  },
  cardImage: {
    width: '70%',
    height: '70%',
    resizeMode: 'cover', // Fit image inside the container
    marginLeft: 20,
    marginRight: 10,
    marginTop: 20,
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 1,
    justifyContent: 'center',
    textAlign: 'center',
  },
  cardSubtitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 4,
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: 4,
  },
});

export default styles;
