import styles from "./category-card.module.scss";
import { RiBook3Fill } from "react-icons/ri";

export default function CategoryCard({ name }: { name: string }) {
  return (
    <div className={styles.card}>
      <svg
        className={styles.icon}
        width="118"
        height="118"
        viewBox="0 0 118 118"
      >
        <path
          d="M98.3825 28.9765C98.0722 28.7273 97.7 28.5671 97.3057 28.5132C96.9115 28.4593 96.5099 28.5136 96.1442 28.6704L60.5229 44.0952C58.9742 44.77 57.0345 45.0908 55.0433 45.0908C52.2666 45.1019 49.394 44.4566 47.3917 43.579C46.7816 43.322 46.2005 43.0006 45.6586 42.6202C45.8061 42.5465 45.9905 42.4653 46.1933 42.3842L78.5917 28.357L83.4223 30.422V24.3855C83.4296 23.9551 83.3395 23.5285 83.1588 23.1377C82.9781 22.7469 82.7114 22.402 82.3787 22.1288C82.0698 21.8799 81.6988 21.7198 81.3058 21.6659C80.9127 21.612 80.5124 21.6662 80.1478 21.8227L44.5265 37.2475C43.4277 37.69 42.4837 38.2358 41.6872 39.0286C40.7648 39.9385 40.241 41.1771 40.2306 42.4727C40.2306 42.5096 40.2417 42.5723 40.2417 42.5723V96.8892L40.2343 96.9629C40.2343 96.9777 40.2453 96.985 40.2453 96.9998V97.0588H40.2527C40.3265 98.9578 41.2852 100.167 42.1997 101.023C45.076 103.56 49.9066 104.98 55.047 105.053C57.4807 105.053 59.9514 104.685 62.2376 103.704L97.8699 88.2752C98.8102 87.8695 99.426 86.8628 99.426 85.7234V31.2332C99.4317 30.803 99.3409 30.377 99.1603 29.9864C98.9798 29.5959 98.714 29.2508 98.3825 28.9765ZM75.7892 18.6515C75.7265 17.8402 75.3909 17.0658 74.7935 16.6012C74.4833 16.352 74.1111 16.1919 73.7168 16.138C73.3225 16.0841 72.921 16.1384 72.5552 16.2952L36.934 31.7126C35.3852 32.3837 33.4419 32.7082 31.4544 32.7082C28.6777 32.7156 25.8051 32.0703 23.8028 31.189C23.192 30.9363 22.6108 30.6172 22.0697 30.2376C22.2172 30.1638 22.4015 30.0827 22.6044 30.0016L55.0064 15.9743L59.837 18.0393V12.0103C59.8436 11.5796 59.7528 11.1529 59.5715 10.7621C59.3902 10.3714 59.123 10.0266 58.7898 9.75354C58.4801 9.50465 58.1085 9.34468 57.7149 9.29077C57.3213 9.23685 56.9204 9.29102 56.5552 9.44747L20.9339 24.876C19.835 25.3185 18.8947 25.8605 18.0945 26.657C17.1736 27.5676 16.6511 28.8061 16.6417 30.1012C16.6417 30.1454 16.6527 30.2044 16.6527 30.2044V84.6946H16.6601C16.7339 86.5937 17.6926 87.8032 18.6071 88.6587C21.4834 91.1957 26.314 92.6117 31.458 92.6854C32.855 92.6772 34.2475 92.5264 35.6139 92.2355V42.5686C35.577 39.9873 36.6095 37.5093 38.4237 35.7246C39.6807 34.5054 41.1741 33.5566 42.8118 32.9368L75.7892 18.6515Z"
          fill="currentColor"
        />
      </svg>
      <h3>{name}</h3>
    </div>
  );
}
