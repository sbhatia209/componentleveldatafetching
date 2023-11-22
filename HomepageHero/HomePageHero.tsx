import {
  ComponentParams,
  ImageField,
  Link,
  LinkField,
  Text,
  TextField,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { getTheme } from '../../helpers/ThemeHelper';
import styles from './HomePageHero.module.css';

interface HomePageHeroProps {
  rendering: {
    componentName: string;
    dataSource: string;
  };
  params: ComponentParams;
  fields: {
    PersonaImage: ImageField;
    Title: TextField;
    Description: TextField;
    Button: LinkField;
  };
}

const HomePageHero = (props: HomePageHeroProps): JSX.Element => {
  const { fields } = props;
  const PersonaImage = fields?.PersonaImage;
  const Title = fields?.Title;
  const Description = fields?.Description;
  const Button = fields?.Button;

  const backgroundStyle = {
    backgroundImage: `url('${PersonaImage?.value?.src}')`,
  };

  return (
    <div className={getTheme(props.params)}>
      <div className={styles['homepage-hero']}>
        <div
          className={styles['persona-image-container']}
          style={backgroundStyle}
        />
        <div className={styles['content-container']}>
          {Title?.value && (
            <h1 className="font-header-xl">
              <Text field={Title} />
            </h1>
          )}
          {Description?.value && (
            <p className="font-list">
              <Text field={Description} />
            </p>
          )}
          {Button?.value?.href && (
            <div>
              <Link
                className="btn-tertiary"
                field={props?.fields?.Button}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default withDatasourceCheck()<HomePageHeroProps>(HomePageHero);
