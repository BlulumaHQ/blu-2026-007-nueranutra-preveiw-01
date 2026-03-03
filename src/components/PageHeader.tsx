interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  compact?: boolean;
}

const PageHeader = ({ title, subtitle, backgroundImage, compact = false }: PageHeaderProps) => {
  return (
    <section
      className={`relative w-full bg-cover bg-center ${compact ? "py-16 md:py-20" : "py-24 md:py-32"}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 hero-overlay" />
      <div className="container-site relative z-10">
        <h1 className="font-heading text-3xl md:text-5xl text-primary-foreground leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg md:text-xl text-primary-foreground/80 max-w-2xl font-body">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
