'use client';

import { useState } from 'react';

import FAQItem from '@/components/FAQItem';
import { IFAQItem } from '@/types';

const faqData: IFAQItem[] = [
  {
    image: '/imgs/faq1.png',
    title: 'WHAT IS AN NFT COLLECTION?',
    text: 'An NFT collection is a group of unique digital assets, each represented by a non-fungible token, typically created around a specific theme or style.',
  },
  {
    image: '/imgs/faq2.png',
    title: 'HOW DO I PURCHASE NFTS FROM A COLLECTION?',
    text: 'To purchase nfts from a collection, you typically need to use cryptocurrency on a blockchain0based marketplace.',
  },
  {
    image: '/imgs/faq3.png',
    title: 'CAN I SELL OR TRADE NFTS FROM A COLLECTION?',
    text: 'Yes, you can sell or trade NFTs from a collection like you would other digital assets.',
  },
  {
    image: '/imgs/faq4.png',
    title: 'WHAT RIGHTS DO I HAVE AS AN OWNER OF AN NFT?',
    text: 'As an NFT owner, you can own, transfer, potentially access exclusive content, resell, but don`t automatically get copyright or intellectual property rights.',
  },
];

export default function FAQ() {
  const [openItem, setOpenItem] = useState<number>(1);

  return (
    <section className="container block-distance">
      <h2 id="faq" className="title mdOnly:mb-12">
        FAQ
      </h2>

      <ul>
        {faqData.map((item, idx) => (
          <FAQItem
            order={idx + 1}
            key={item.image}
            data={item}
            selectNumber={openItem}
            onClick={setOpenItem}
          />
        ))}
      </ul>
    </section>
  );
}
