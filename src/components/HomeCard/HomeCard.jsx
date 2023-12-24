import Link from "next/link";
import React from "react";

const HomeCard = ({ dataInfo }) => {
  const { id, name, email, address } = dataInfo;

  return (
    <div>
      <Link
        href={`/user/${id}`}
        className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
      >
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

        <div className="sm:flex sm:justify-between sm:gap-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
              {name}
            </h3>

            <p className="mt-1 text-sm font-medium text-gray-600">{email}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HomeCard;
